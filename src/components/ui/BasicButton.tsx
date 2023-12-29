type BasicButtonProps = {
  label?: string;
  onClick: () => void;
};

const BasicButton: React.FC<BasicButtonProps> = ({ onClick, label }) => {
  return (
    <button className="font-inter" onClick={onClick}>
      {label}
    </button>
  );
};

export default BasicButton;
