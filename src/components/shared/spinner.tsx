type SpinnerProps = {
  size?: 'small' | 'medium' | 'large';
};

const Spinner = ({ size = 'medium' }: SpinnerProps) => {
  const sizeClasses = {
    small: 'h-4 w-4 border-4',
    medium: 'h-8 w-8 border-4',
    large: 'h-12 w-12 border-4',
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} border-solid border-foreground/20 border-t-foreground`}
      />
    </div>
  );
};

export default Spinner;
