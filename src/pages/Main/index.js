import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Form, SubmitButton, List, RepoError } from './styles';
import Container, { Logo } from '../../components/Container';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    repoError: false,
    repoDuplicated: false,
  };

  // Carrega dados no LocalStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salva dados no LocalStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    try {
      if (repositories.find((repository) => repository.name === newRepo)) {
        throw new Error('Duplicated repository');
      }

      const response = await api.get(`/repos/${newRepo}`, { timeout: 5000 });

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        repoError: false,
        repoDuplicated: false,
      });
    } catch (error) {
      if (error.message === 'Duplicated repository') {
        this.setState({ repoDuplicated: true, loading: false });
      } else {
        this.setState({
          loading: false,
          repoError: true,
          repoDuplicated: false,
        });
      }
    }
  };

  // Conditional Rendering on loading
  render() {
    const {
      newRepo,
      loading,
      repositories,
      repoError,
      repoDuplicated,
    } = this.state;

    return (
      <Container>
        <Logo>
          <FaGithubAlt />
        </Logo>
        <h1>Repositories</h1>

        <Form
          onSubmit={this.handleSubmit}
          repoError={repoError ? 1 : undefined}
        >
          <input
            type="text"
            placeholder="Add repository"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading ? 1 : undefined}>
            {loading ? (
              <FaSpinner color="#f8f8f2" size={14} />
            ) : (
              <FaPlus color="#f8f8f2" size={14} />
            )}
          </SubmitButton>
        </Form>
        {repoError && !repoDuplicated ? (
          <RepoError>Repository not found</RepoError>
        ) : (
          <> </>
        )}
        {repoDuplicated ? (
          <RepoError>Repository already exists</RepoError>
        ) : (
          <></>
        )}
        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Details
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
