import { useEffect } from 'react';

const wrapObjectInArray = (arg) => {
  if (arg === undefined) return arg;

  if (Object.prototype.toString.call(arg) !== '[object Array]') return [arg];

  return arg;
};

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export { wrapObjectInArray, useOnClickOutside };
