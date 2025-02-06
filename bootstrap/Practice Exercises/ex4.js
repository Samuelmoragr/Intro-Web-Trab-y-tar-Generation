function encontrarCursosComunes(CursosEstudiante1, CursosEstudiante2) {
    // Filtramos los cursos comunes usando filter y includes
    const commonCourses = CursosEstudiante1.filter(curso => CursosEstudiante2.includes(curso));
    
    // Imprimimos los cursos comunes si existen
    if (commonCourses.length > 0) {
        console.log(`Cursos comunes: ${commonCourses.join(', ')}`);
    } else {
        console.log('No se encontraron cursos comunes.');
    }
}

let CursosEstudiante1 = ['Math', 'English', 'Programming'];
let CursosEstudiante2 = ['Geography', 'Spanish', 'Programming'];
encontrarCursosComunes(CursosEstudiante1, CursosEstudiante2); // Output: Common courses: Programming