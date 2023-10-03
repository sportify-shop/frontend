import { css } from '@emotion/css';
import React, { ReactElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface HookMenu {
  containerMenu: React.ReactPortal | null;
  closeMenu: () => void;
  showMenu: (e: React.MouseEvent<HTMLElement>) => void;
}

interface HookMenuProps {
  menuChild: ReactElement;
}

const useMenu = ({ menuChild }: HookMenuProps): HookMenu => {
  const [isOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });

  const modalDivCss = css`
    z-index: 1750;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  `;

  const menuDivCss = css`
    top: ${points.y}px;
    left: ${points.x}px;

    position: fixed;
  `;

  const menu = (
    <div className={modalDivCss} onClick={() => setIsOpen(false)}>
      <div className={menuDivCss} onClick={(e) => e.stopPropagation()}>
        <div
          className={css`
            background-color: #fff;
            box-shadow: var(--overlap-shadow);
            display: inline-block;
          `}
        >
          {menuChild}
        </div>
      </div>
    </div>
  );

  const showMenu = (e: React.MouseEvent<any>) => {
    let parentNode: HTMLElement = e.target as HTMLElement;
    let maxLevels = 10;
    for (let i = 0; i < maxLevels && !parentNode?.matches('a,button'); i++) {
      parentNode = parentNode?.parentElement!;
    }
    let rect = parentNode!.getBoundingClientRect();
    setPoints({
      x: rect.left,
      y: rect.bottom,
    });

    setIsOpen(true);
  };

  const closeOnEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', closeOnEscapeKey, false);
    } else {
      document.removeEventListener('keydown', closeOnEscapeKey, false);
    }
  }, [isOpen]);

  useEffect(() => {
    const pad = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.body.style.paddingRight = isOpen ? `${pad}px` : '0px';
  }, [isOpen]);

  return {
    closeMenu: () => setIsOpen(false),
    containerMenu: isOpen ? ReactDOM.createPortal(menu, document.body) : null,
    showMenu,
  };
};
export default useMenu;
