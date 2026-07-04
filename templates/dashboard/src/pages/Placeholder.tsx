export function Placeholder({ title }: { title: string }) {
  return (
    <main className="flex-grow flex items-center justify-center">
      <div className="text-center bg-white rounded-3xl p-12 shadow-sm border border-slate-100 max-w-lg w-full mx-auto">
        <h2 className="text-3xl font-semibold text-slate-800 mb-4">{title}</h2>
        <p className="text-slate-500 font-light leading-relaxed">
          This is a placeholder page designed to demonstrate React Router functionality. 
          The main dashboard elements are located on the Home tab.
        </p>
      </div>
    </main>
  );
}
