const If = (props: any) => {
  if (props.test) {
    return props.children;
  } else {
    return null;
  }
};

export default If;
