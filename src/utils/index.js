export const rankings = [
  {
    nombre: "Monterrey",
    sitio: false,
    insumos: false,
    entregados: false,
    utilizados: false,
    donativos: false,
    informacion: false,
    urls: [""],
  },
  {
    nombre: "Guadalupe",
    sitio: 1,
    insumos: false,
    entregados: true,
    utilizados: true,
    donativos: false,
    informacion: false,
    urls: [
      "http://www.guadalupe.gob.mx/apoyoscovid/",
      "http://www.guadalupe.gob.mx/coronavirus/",
    ],
  },
  {
    nombre: "San Nicolás",
    sitio: false,
    insumos: true,
    entregados: true,
    utilizados: true,
    donativos: false,
    informacion: true,
    urls: [
      "https://www.sanicolas.gob.mx/gastoscovid/",
      "https://www.sanicolas.gob.mx/category/noticias/",
    ],
  },
  {
    nombre: "Apodaca",
    sitio: true,
    insumos: false,
    entregados: false,
    utilizados: false,
    donativos: false,
    informacion: false,
    urls: ["http://coronavirus.apodaca.gob.mx/"],
  },
  {
    nombre: "Escobedo",
    sitio: true,
    insumos: true,
    entregados: true,
    utilizados: true,
    donativos: true,
    informacion: true,
    urls: [
      "https://escobedo.gob.mx/?p=proactiva",
      "https://escobedo.gob.mx/transparencia/proactiva/docs/COVID19_GASTO.xlsx",
      "https://escobedo.gob.mx/?p=covid",
    ],
  },
  {
    nombre: "Sta. Catarina",
    sitio: true,
    insumos: false,
    entregados: true,
    utilizados: true,
    donativos: true,
    informacion: true,
    urls: [
      "http://www.stacatarina.gob.mx/apps/covid19/",
      "http://www.stacatarina.gob.mx/apps/covid19/files/pagos.xlsx",
    ],
  },
  {
    nombre: "Juarez",
    sitio: false,
    insumos: false,
    entregados: false,
    utilizados: false,
    donativos: false,
    informacion: false,
    urls: [""],
  },
  {
    nombre: "García",
    sitio: false,
    insumos: false,
    entregados: false,
    utilizados: false,
    donativos: false,
    informacion: false,
    urls: [""],
  },
  {
    nombre: "San Pedro",
    sitio: true,
    insumos: true,
    entregados: true,
    utilizados: true,
    donativos: true,
    informacion: true,
    urls: ["https://sanpedro.gob.mx/coronavirus/"],
  },
  {
    nombre: "Estado de Nuevo León",
    sitio: true,
    insumos: true,
    entregados: false,
    utilizados: false,
    donativos: false,
    informacion: true,
    urls: [
      "http://www.nl.gob.mx/coronavirus",
      "http://www.nl.gob.mx/informefinanciero-covid-19",
      "http://www.nl.gob.mx/series/acciones-de-apoyo-las-familias-de-nuevo-leon-ante-covid-19",
    ],
  },
];

export const score = [
    {
        nombre: "Escobedo",
        calificacion: 100
    },
    {
        nombre: "San Pedro",
        calificacion: 75
    },
    {
        nombre: "San Nicolas",
        calificacion: 66
    },
    {
        nombre: "Guadalupe",
        calificacion: 50
    },
    {
        nombre: "Estado de NL",
        calificacion: 33
    },
    {
        nombre: "Apodaca",
        calificacion: 17
    },
    {
        nombre: "García",
        calificacion: 0
    },
    {
        nombre: "Juárez",
        calificacion: 0
    },
    {
        nombre: "Monterrey",
        calificacion: 0
    },
]

export const conceptos = [
    {
        nombre: "Micrositio",
        slug: "sitio"
    },
    {
        nombre: "Adquisición de Insumos",
        slug: "insumos"
    },
    {
        nombre: "Apoyos Entregados",
        slug: "entregados"
    },
    {
        nombre: "Apoyos Utilizados",
        slug: "utilizados"
    },
    {
        nombre: "Donativos Particulares",
        slug: "dontaivos"
    },
]
