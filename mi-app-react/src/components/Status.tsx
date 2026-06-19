const mockStatus = "online";

export default function Status() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
      <span className="text-sm text-gray-500">{mockStatus}</span>
    </div>
  );
}
