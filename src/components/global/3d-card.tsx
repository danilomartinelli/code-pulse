'use client';

import { cn } from '@/lib/utils';
import {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';

type CardContainerProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

type MouseEnterContextType = [
  boolean,
  Dispatch<SetStateAction<boolean>>
];

const MouseEnterContext = createContext<
  MouseEnterContextType | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: CardContainerProps) => {
  const containerRef = useRef<HTMLButtonElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const contextValue = useMemo(
    (): MouseEnterContextType => [isMouseEntered, setIsMouseEntered],
    [isMouseEntered]
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={contextValue}>
      <div
        className={cn(
          'flex items-center justify-center',
          containerClassName
        )}
        style={{
          perspective: '1000px',
        }}
      >
        <button
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'flex items-center justify-center relative transition-all duration-200 ease-linear',
            className
          )}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </button>
      </div>
    </MouseEnterContext.Provider>
  );
};

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardBody = ({ children, className }: CardBodyProps) => {
  return (
    <div
      className={cn(
        'h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]',
        className
      )}
    >
      {children}
    </div>
  );
};

type CardItemProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  onClick?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
};

export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  onClick,
  ...rest
}: CardItemProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isMouseEntered] = useMouseEnter();
  const isButton = Tag === 'button';

  const handleAnimations = useCallback(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [
    isMouseEntered,
    translateX,
    translateY,
    translateZ,
    rotateX,
    rotateY,
    rotateZ,
  ]);

  useEffect(() => {
    handleAnimations();
  }, [handleAnimations]);

  const ElementType = isButton ? 'span' : Tag;

  return (
    <ElementType
      ref={ref}
      className={cn(
        'w-fit transition duration-200 ease-linear',
        className,
        isButton || onClick ? 'cursor-pointer' : ''
      )}
      {...(isButton || onClick
        ? { role: 'button', tabIndex: 0 }
        : {})}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ElementType>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error(
      'useMouseEnter must be used within a MouseEnterProvider'
    );
  }
  return context;
};
