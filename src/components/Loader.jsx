// src/components/Loader.jsx

export default function Loader({ visible = true }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Circle dots loader */}
        <div className="flex items-center justify-center space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-black animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: '0.8s',
              }}
            />
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold">جاري التحميل...</h3>
          <p className="text-sm text-gray-500">التصميم يُجهز السحر ✨</p>
        </div>
      </div>

      <style jsx>{`
        .animate-bounce {
          animation: bounce 0.8s infinite ease-in-out;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </div>
  );
}