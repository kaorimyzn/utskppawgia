import React from 'react';

class FormValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      errors: {
        name: '',
        email: '',
        message: ''
      },
      formValid: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.formValid) {
      console.log('Formulir dikirim:', this.state);
    } else {
      console.log('Formulir tidak valid');
    }
  };

  validateField(fieldName, value) {
    let errors = this.state.errors;
    let formValid = this.state.formValid;

    switch (fieldName) {
      case 'name':
        errors.name = value.length < 3 ? 'Nama harus berisi minimal 3 karakter' : '';
        break;
      case 'email':
        errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email tidak valid' : '';
        break;
      case 'message':
        errors.message = value.trim() === '' ? 'Pesan tidak boleh kosong' : '';
        break;
      default:
        break;
    }

    formValid = Object.values(errors).every((error) => error === '');

    this.setState({ errors, formValid });
  }

  render() {
    const { name, email, message, errors } = this.state;

    return (
      <div>
        <h1>Formulir Pendaftaran</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nama:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div>
            <label>Alamat Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <label>Pesan:</label>
            <textarea
              name="message"
              value={message}
              onChange={this.handleInputChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit">Kirim</button>
        </form>
      </div>
    );
  }
}

export default FormValidation;
