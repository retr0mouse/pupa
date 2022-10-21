const TextTyper = () => {
	const el = React.useRef(null);
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'HTML characters &times; &copy;'
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
    </div>
  );
}

ReactDOM.render(
	<TextTyper/>,
  document.getElementById('react-root')
);