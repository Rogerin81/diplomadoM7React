import { useState } from 'react';
import { motion } from "motion/react";
import ModalInfo from "../../Components/Modals/ModalInfo";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateForm, submitForm, setModalType } from '../../store/form/formSlice.js';

const FormLoginWithMotion = ({ titleForm }) => {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  const { module, username, email, password } = useSelector((state) => state.form);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.password === "mod7USIP-Roger") {
      setModalMessage(`Bienvenido: ${formState.username}!`);
      dispatch(setModalType("success"));
      dispatch(
        submitForm({
          username: formState.username,
          email: formState.email,
        })
      );
    } else {
      setModalMessage("Username/Password incorrectos!!!!");
      dispatch(setModalType("error"));
    }

    setShowModal(true);
  };

  const onCloseModalInfo = () => {
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalInfo
        visible={showModal}
        message={modalMessage}
        valor={username}
        type={formState.modalType}
        onClose={onCloseModalInfo}
      />
      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{titleForm}</h2>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='form-group'>
            <label>Module:</label>
            <input
              type="text"
              id="module"
              name="module"
              value={module}
              disabled
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='form-group'>
            <label>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Ingrese su nombre de usuario"
              required
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='form-group'>
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Ingrese su correo electrónico"
              required
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='form-group'>
            <label>Password:</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"} 
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Ocultar" : "Mostrar"} 
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button type="submit" className='btn-submit'>Enviar</button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default FormLoginWithMotion;