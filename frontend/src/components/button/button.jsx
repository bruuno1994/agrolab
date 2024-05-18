import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/button.scss';

function Button({ trasformButton }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
  
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setIsPressed(false);
    };
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
  
    return (
      <button
        className={`custom-button ${isHovered ? 'hovered' : ''} ${isPressed ? 'pressed' : ''} ${trasformButton ? 'triangle' : 'round'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        Custom Button
      </button>
    );
  }
  
  Button.propTypes = {
    trasformButton: PropTypes.bool.isRequired
  };
  
  export default Button;


/**
 * Componente Button com diferentes estados e função para alternar formato redondo.
 *
 * Estados do botão:
 * - isHovered: Controla se o mouse está sobre o botão.
 * - isPressed: Controla se o botão está sendo pressionado.
 * - isRound: Controla se o botão está com formato redondo.
 *
 * Eventos de Mouse:
 * - handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp: Funções para alterar os estados do botão conforme as interações do usuário.
 *
 * Toggle Round:
 * - toggleRound: Alterna o estado isRound entre true e false, mudando o formato do botão.
 */