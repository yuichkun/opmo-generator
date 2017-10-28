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

export const genMeasure = (index:number, omn:string):string => {
  const measure = 
`
(setf measure${index} ${omn})
`
return measure;
}

export const genBlank = (timeSig: string):string => {
  const blank =
`
'(-${timeSig})
`
return blank;
}

export const genCustom = (timeSig: string, _args:string):string => {
  const args = _args.split("~")[0].split("-").join(" "); 
  const custom =
`
(${args})
`
return custom;
}

export const assembleOMN = (length:number):string => {
  let measureList = "";
  for(let i = 0; i < length; i++){
    measureList += `measure${i} `;
  }
  const omn =
`
(setf omn (assemble-seq '(${measureList})))
`
  return omn; 
}

export const genScore = (name:string):string => {
  const score = 
`
(def-score ${name}
           (:key-signature 'atonal
            :time-signature '(4 4)
            :tempo 120)
(${name} omn: omn)
)
` 
return score;
}