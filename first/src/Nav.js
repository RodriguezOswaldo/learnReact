function Nav(){
    return (
      <div className="Nav">
          <nav className="bg-gray-800">
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                  <div className="relative flex items-center justify-between h-16">
                      <div className="absolute inset-y-0 left-0 flex items-center">
                          <button type="button"
                                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                  aria-controls="mobile-menu" aria-expanded="false">
                              <span className="sr-only">Open main menu</span>
                          </button>
                          <li>Home</li>
                          <li>Content</li>
                          <li>Family</li>
                          <li>Aboout us</li>
                      </div>
              </div>
              </div>
          </nav>

      </div>
    );
}
export default Nav;