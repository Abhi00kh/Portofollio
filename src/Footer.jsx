import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" text-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Footer Top Section: Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: abhijitkhule0@gmail.com</p>
            <p className="text-gray-400">Phone: 87664547451</p>
            <p className="text-gray-400">Location: Pune,India</p>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white">
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
          </p>
          <div className="mt-2">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm mx-4">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm mx-4">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}