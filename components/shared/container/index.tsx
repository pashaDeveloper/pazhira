import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = ""
}) => {
  return (
    <section className={`container mx-auto px-4 ${className}`}>
      {children}
    </section>
  );
};

export default Container;