export const SHOWMUSICXML =
`(display-musicxml *last-score*)
`;

export const SHOWMIDI =
`(display-midi *last-score*)
`;

export const genLoader = (files: string)=>{
const loader =
`(let ((files '(${files})))
  (loop for file in files do
    (load (merge-pathnames file *load-truename*))
  )
)
`;
  return loader;
};

export const genCompiler = (files: string) => {
const compiler = 
`
(setf path (merge-pathnames "XML/bundle.xml" *load-truename*))
(compile-score '(${files}) :output :musicxml :file path)
`;
  return compiler;
};