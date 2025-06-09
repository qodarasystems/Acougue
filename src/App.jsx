"use client"

import React, { useState, useEffect } from "react"
import { FaPeopleGroup} from "react-icons/fa6";
import { FaWhatsapp, 
        FaInstagram, 
        FaFacebookF } from "react-icons/fa";
import { RiKnifeLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import { GiCow } from "react-icons/gi";
import { BsFillTelephoneFill, BsSmartwatch  } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";




import "./App.css"

function App()
  
{
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    mensagem: "",
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.")
    setFormData({
      nome: "",
      telefone: "",
      mensagem: "",
    })
  }

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          <div className="logo">
            <img src="/logo-bckr.png" alt="Açougue Premium" />
            <div className="logo-text">
              <h1>PREMIUM</h1>
              <p>AÇOUGUE BRASILEIRO</p>
            </div>
          </div>

          <div className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
                  Início
                </a>
              </li>
              <li>
                <a href="#carnes" onClick={() => setIsMenuOpen(false)}>
                  Carnes
                </a>
              </li>
              <li>
                <a href="#especiais" onClick={() => setIsMenuOpen(false)}>
                  Especiais
                </a>
              </li>
              <li>
                <a href="#kit-churrasco" onClick={() => setIsMenuOpen(false)}>
                  Kit Churrasco
                </a>
              </li>
              <li>
                <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <div className="cta-button header-cta">
            <a href="#catalogo">Compre Online</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h2 className="animate-fade-in">Excelência em carnes selecionadas para a sua mesa</h2>
            <p className="animate-fade-in delay-1">Cortes nobres e selecionados com o mais alto padrão de qualidade</p>
            <div className="cta-button animate-fade-in delay-2">
              <a href="#catalogo">Ver Nosso Catálogo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item animate-fade-up">
              <div className="feature-icon">
                {/* <img src="/icon-meat.png" alt="Carnes Nobres" /> */}
                <GiCow />
              </div>
              <h3>Carnes Nobres</h3>
              <p>Selecionadas com rigoroso controle de qualidade</p>
            </div>

            <div className="feature-item animate-fade-up delay-1">
              <div className="feature-icon">
              {/*   <img src="/icon-delivery.png" alt="Entrega Rápida" /> */}
              <MdDeliveryDining />
              </div>
              <h3>Entrega Rápida</h3>
              <p>Receba seus pedidos no mesmo dia</p>
            </div>

            <div className="feature-item animate-fade-up delay-2">
              <div className="feature-icon">
                {/* <img src="/icon-cut.png" alt="Cortes Especiais" /> */}
                <RiKnifeLine />
              </div>
              <h3>Cortes Especiais</h3>
              <p>Preparados de acordo com sua preferência</p>
            </div>

            <div className="feature-item animate-fade-up delay-3">
              <div className="feature-icon">
               {/*  <img src="/icon-service.png" alt="Atendimento Personalizado" /> */}
               <FaPeopleGroup />

              </div>
              <h3>Atendimento de Qualidade</h3>
              <p>Equipe especializada para melhor atendê-lo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="carnes" className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Nossos Cortes Premium</h2>
            <p>Conheça nossa seleção de carnes nobres</p>
          </div>

          <div className="products-grid">
            <div className="product-card animate-fade-up">
              <div className="product-image">
                <img src="/picanha.svg" alt="Picanha Premium" />
              </div>
              <div className="product-info">
                <h3>Picanha Premium</h3>
                <p>Corte nobre com marmoreio perfeito</p>
                <span className="price">R$ 89,90/kg</span>
              </div>
            </div>

            <div className="product-card animate-fade-up delay-1">
              <div className="product-image">
                <img src="/csuina.svg" alt="Ribeye Angus" />
              </div>
              <div className="product-info">
                <h3>Costela Suina</h3>
                <p>Suculenta e com sabor intenso</p>
                <span className="price">R$ 99,90/kg</span>
              </div>
            </div>

            <div className="product-card animate-fade-up delay-2">
              <div className="product-image">
                <img src="/tomahawk.svg" alt="Tomahawk Steak" />
              </div>
              <div className="product-info">
                <h3>Tomahawk Steak</h3>
                <p>Impressionante e saboroso</p>
                <span className="price">R$ 119,90/kg</span>
              </div>
            </div>

            <div className="product-card animate-fade-up delay-3">
              <div className="product-image">
                <img src="/filem.svg" alt="Filé Mignon" />
              </div>
              <div className="product-info">
                <h3>Filé Mignon</h3>
                <p>Macio e extremamente suculento</p>
                <span className="price">R$ 79,90/kg</span>
              </div>
            </div>
          </div>

          <div className="view-more">
            <a href="#catalogo" className="btn-secondary">
              Ver Catálogo Completo
            </a>
          </div>
        </div>
      </section>

      {/* Special Cuts Section */}
      <section id="especiais" className="special-cuts-section">
        <div className="container">
          <div className="section-header">
            <h2>Cortes Especiais</h2>
            <p>Seleção exclusiva para momentos únicos</p>
          </div>

          <div className="special-cuts-grid">
            <div className="special-cut-item animate-fade-up">
              <img src="/ancho.svg" alt="Ancho Argentino" />
              <div className="special-cut-info">
                <h3>Ancho Argentino</h3>
                <p>Corte tradicional argentino com sabor marcante</p>
              </div>
            </div>

            <div className="special-cut-item animate-fade-up delay-1">
              <img src="/chorizo.svg" alt="Chorizo Uruguaio" />
              <div className="special-cut-info">
                <h3>Chorizo Uruguaio</h3>
                <p>Corte uruguaio com marmoreio excepcional</p>
              </div>
            </div>

            <div className="special-cut-item animate-fade-up delay-2">
              <img src="/wagyu.svg" alt="Wagyu A5" />
              <div className="special-cut-info">
                <h3>Wagyu A5</h3>
                <p>O mais alto padrão de marmoreio do mundo</p>
              </div>
            </div>

            <div className="special-cut-item animate-fade-up delay-3">
              <img src="/costela.svg" alt="Costela Premium" />
              <div className="special-cut-info">
                <h3>Costela Premium</h3>
                <p>Perfeita para churrasco de longa duração</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BBQ Kit Section */}
      <section id="kit-churrasco" className="bbq-kit-section">
        <div className="container">
          <div className="bbq-content">
            <div className="bbq-text animate-fade-right">
              <h2>Kit Churrasco</h2>
              <p>
                Tudo o que você precisa para um churrasco perfeito em um só lugar. Nossos kits incluem carnes
                selecionadas, temperos especiais e acessórios essenciais.
              </p>
              <ul>
                <li>Carnes nobres em porções ideais</li>
                <li>Temperos exclusivos</li>
                <li>Acompanhamentos selecionados</li>
                <li>Opções para diferentes ocasiões</li>
              </ul>
              <div className="cta-button">
                <a href="#catalogo">Montar Meu Kit</a>
              </div>
            </div>

            <div className="bbq-image animate-fade-left">
              <img src="/kit.svg" alt="Kit Churrasco Premium" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image animate-fade-right">
              <img src="/about.svg" alt="Nossa História" />
            </div>

            <div className="about-text animate-fade-left">
              <h2>Sobre Nós</h2>
              <p>
                Há mais de 20 anos no mercado, o Açougue Premium se destaca pela excelência e qualidade em seus
                produtos. Nossa história começou com uma pequena loja familiar e hoje somos referência em carnes nobres
                em todo o Brasil.
              </p>
              <p>
                Trabalhamos apenas com fornecedores certificados e mantemos um rigoroso controle de qualidade em todos
                os processos, desde a seleção dos animais até a entrega ao cliente final.
              </p>
              <p>
                Nossa missão é proporcionar momentos inesquecíveis através de produtos de alta qualidade, atendimento
                personalizado e respeito ao cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>O Que Nossos Clientes Dizem</h2>
            <p>Avaliações de quem já experimentou nossos produtos</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card animate-fade-up">
              <div className="stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="testimonial-text">
                "A melhor picanha que já provei! O atendimento é excelente e a entrega foi super rápida. Recomendo a
                todos!"
              </p>
              <div className="testimonial-author">
                <img src="/c1.png" alt="Carlos Silva" />
                <span>Carlos Silva</span>
              </div>
            </div>

            <div className="testimonial-card animate-fade-up delay-1">
              <div className="stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="testimonial-text">
                "Os cortes são impecáveis e o sabor é incomparável. Virei cliente fiel depois do primeiro pedido."
              </p>
              <div className="testimonial-author">
                <img src="/c2.png" alt="Ana Oliveira" />
                <span>Ana Oliveira</span>
              </div>
            </div>

            <div className="testimonial-card animate-fade-up delay-2">
              <div className="stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="testimonial-text">
                "O kit churrasco foi perfeito para minha reunião familiar. Todos elogiaram a qualidade da carne!"
              </p>
              <div className="testimonial-author">
                <img src="/c3.png" alt="Roberto Martins" />
                <span>Roberto Martins</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info animate-fade-right">
              <h2>Entre em Contato</h2>
              <p>Estamos à disposição para atender suas necessidades e tirar todas as suas dúvidas.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <img src="/logo-bckr.png" alt="Endereço" />
                  </div>
                  <div>
                    <h3>Endereço</h3>
                    <p>
                      Av. Brasil, 1500 - Centro
                      <br />
                      São Paulo - SP
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    {/* <img src="/icon-phone.png" alt="Telefone" /> */}
                    <BsFillTelephoneFill />
                  </div>
                  <div>
                    <h3>Telefone</h3>
                    <p>
                      (11) 3456-7890
                      <br />
                      (11) 98765-4321
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    {/* <img src="/icon-email.png" alt="Email" /> */}
                    <IoMdMail />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>contato@acouguepremium.com.br</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    {/* <img src="/icon-clock.png" alt="Horário" /> */}
                    <BsSmartwatch />
                  </div>
                  <div>
                    <h3>Horário de Funcionamento</h3>
                    <p>
                      Segunda a Sábado: 8h às 20h
                      <br />
                      Domingo: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form animate-fade-left">
              <h2>Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="5"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo-bckr.png" alt="Açougue Premium" />
              <div className="footer-logo-text">
                <h2>PREMIUM</h2>
                <p>AÇOUGUE BRASILEIRO</p>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-links-column">
                <h3>Menu</h3>
                <ul>
                  <li>
                    <a href="#inicio">Início</a>
                  </li>
                  <li>
                    <a href="#carnes">Carnes</a>
                  </li>
                  <li>
                    <a href="#especiais">Especiais</a>
                  </li>
                  <li>
                    <a href="#kit-churrasco">Kit Churrasco</a>
                  </li>
                  <li>
                    <a href="#contato">Contato</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h3>Contato</h3>
                <ul>
                  <li>Av. Brasil, 1500 - Centro</li>
                  <li>São Paulo - SP</li>
                  <li>(11) 3456-7890</li>
                  <li>contato@acouguepremium.com.br</li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h3>Horário</h3>
                <ul>
                  <li>Segunda a Sexta: 8h às 20h</li>
                  <li>Sábado: 8h às 18h</li>
                  <li>Domingo: 8h às 12h</li>
                </ul>
              </div>
            </div>

            <div className="footer-social">
              <h3>Siga-nos</h3>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">
                  {/* <img src="/icon-facebook.png" alt="Facebook" /> */}
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Instagram">
                 {/*  <img src="/icon-instagram.png" alt="Instagram" /> */}
                 <FaInstagram />
                </a>
                <a href="#" aria-label="WhatsApp">
                 {/*  <img src="/icon-whatsapp.png" alt="WhatsApp" /> */}
                 <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Açougue Premium. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

          <a
              href="https://wa.me/5511919223489"
              className="whatsapp-float"
              target="_blank"
              rel="noopener noreferrer"
              >
              {/* 🟢 WhatsApp */}
              <FaWhatsapp />
           </a>
    
    </div>
  )
}

export default App
