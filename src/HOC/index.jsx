function HOC(Component) {
  const WidthLoading = ({ isLoading, ...prop }) => {
    if (isLoading) {
      return <div>...Loading</div>;
    }
    return <Component {...prop} />;
  };

  return WidthLoading;
}

export default HOC;
