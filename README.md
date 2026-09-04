# Dashboard IMSS – Plataformas Digitales

Visualización interactiva de los datos del **IMSS** sobre personas beneficiadas y trabajadoras de plataformas digitales (TDP), elaborada con **Dash** y **Plotly**.

## Despliegue
Este dashboard está implementado con [Render.com](https://render.com) y se actualiza automáticamente al subir cambios a este repositorio.

## Cómo agregar un mes nuevo
Cada mes vive en **un solo csv**, con la estructura tal cual se descarga de la fuente (ya no hace falta separarlo a mano en dos archivos). Para actualizar el tablero:

1. Descarga el csv del mes.
2. Colócalo en la raíz del repo con un nombre que **empiece con `IMSS_PD_`** y sea único (agrega el año si el nombre se repite de un año a otro, p.ej. `IMSS_PD_julio_2026.csv`).
3. Sube el cambio al repo (push) — Render vuelve a desplegar solo.

El mes que aparece en las pestañas y el orden cronológico se calculan solos a partir de la columna `fecha` (formato `AAAAMM`) que trae cada archivo; el nombre del archivo es solo para que tú lo identifiques.

## Archivos principales
| Archivo | Descripción |
|----------|--------------|
| `dash_app1.py` | Script principal del dashboard |
| `IMSS_PD_*.csv` | Un archivo por mes, con la estructura orgánica de descarga |
| `requirements.txt` | Dependencias necesarias |
| `README.md` | Descripción del proyecto |

## Tecnologías
- Python 3.10+
- Dash 2.17.0
- Plotly 5.22.0
- Pandas / NumPy

---
*Secretaría del Trabajo y Fomento al Empleo (CDMX) – Observatorio de Plataformas Digitales*

