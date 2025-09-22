import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders'; // Not available with legacy API


const escuelas = defineCollection({
    loader: file("src/data/escuelasProgramas.json"),
    schema: ({image}) =>
        z.object({            
            imgSrc: image(),
            idHTML: z.string(),
            // alt: z.string(),
            title: z.string(),
            description: z.string(),
            pageRoute: z.string(),
            shortTitle: z.string(),
            heroDescription: z.string(),
            heroImgSrc: image(),
            programas: z.array(
                z.object({ title: z.string(), description: z.string(), route: z.string() })
            ),
        }),
});

const programas = defineCollection({
    loader: file("src/data/programas.json"),
    schema: ({image}) =>
        z.object({            
            escuela: z.number(),
            heroImgSrc: image(),
            route: z.string(),

            imgSrc: image(),
            title: z.string(),
            claveRVOE: z.string(),
            claveEscuela: z.string(),
            description: z.string(),
            inscripcion: z.string(),
            duracion: z.string(),
            materias: z.string(),
            modalidad: z.string(),
            descargableFicha: z.string(),
            descargablePlan: z.string(),

        }),
});

export const collections = { escuelas, programas };