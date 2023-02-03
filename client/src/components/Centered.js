
const Centered = props => {
  const {
    classes,
    className,
    children,
    ...rest
  } = props;
  return (
    <div className={`${classes} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Centered
