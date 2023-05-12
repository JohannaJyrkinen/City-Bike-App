import '../css/customButton.css'

export const Button = ({ onClick, children }) => {
    return (
      <button className="custom-button" type="button" onClick={onClick}>
        {children}
      </button>
    );
};