const Button = ({ label, onClick, type }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 sm:h-14 w-30 sm:w-48 overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-[#393BB2] px-3 py-1 text-sm sm:text-lg font-medium text-white backdrop-blur-3xl">
          {label}
        </span>
      </button>
    </div>
  );
};

export default Button;
