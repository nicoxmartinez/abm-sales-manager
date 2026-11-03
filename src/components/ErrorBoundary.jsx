import React, { Component } from 'react'
import { FaWrench, FaCogs } from 'react-icons/fa'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
    this.reloadPage = this.reloadPage.bind(this)
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo)
  }

  reloadPage() {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div
              className="container-fluid"
              style={{ position: 'relative', height: '120px' }}
            >
            </div>
          </nav>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 100,
            }}
          >
            <FaWrench style={{ fontSize: '5em' }} />
            <FaCogs style={{ fontSize: '5em' }} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h4>Lo siento, Algo salió mal.</h4>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button className="btn btn-primary" onClick={this.reloadPage}>
              Volver
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
