import { Loader } from '@/features/construction';
export default function ConstructionPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Light mode: bg-green-50 */}
      <h1 className="text-green-400 text-3xl font-bold pb-2">
        {/* Light mode: text-green-900 */}
        En Developpement
      </h1>
      <Loader len="12" speed="150" />
    </div>
  );
}
