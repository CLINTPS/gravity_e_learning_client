export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Cokonet Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
