import always from 'ramda/src/always';
import cond from 'ramda/src/cond';
import equals from 'ramda/src/equals';
import * as icons from './index';

const langs = ['csharp', 'cpp', 'python', 'golang', 'haskell', 'fsharp', 'ruby', 'javascript'];

const components = [
  icons.CSharpIcon,
  icons.CppIcon,
  icons.PythonIcon,
  icons.GolangIcon,
  icons.HaskellIcon,
  icons.FSharpIcon,
  icons.RubyIcon,
  icons.JSIcon,
];

export const getIcon = cond(langs.map((lang, i) => [equals(lang), always(components[i])]));
