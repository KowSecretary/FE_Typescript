
export default function Title({ titleSection }: { titleSection: String }) {
  return (
    <div className="w-50 pt-10">
      <p className="text-2xl font-semibold text-left">{titleSection}</p>
      <div className="flex flex-row justify-start items-center h-1 bg-gradient-to-r from-gray-800 to-gray-400 w-full"></div>
    </div>
  );
}
