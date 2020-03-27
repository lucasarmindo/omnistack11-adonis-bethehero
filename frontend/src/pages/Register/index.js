import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, ContentWrap, Section, Form } from './styles';
import logoImg from '../../assets/logo.svg';
import { Colors } from '../../styles/colors';

export default function Register() {
  return (
    <Container>
      <ContentWrap>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajuda a econtrarem os casos
            da sua ONG.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color={Colors.primary} />
            Não tenho cadastro
          </Link>
        </Section>
        <Form>
          <input type="text" placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="WhatsApp" />
          <div className="input-group">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </Form>
      </ContentWrap>
    </Container>
  );
}
