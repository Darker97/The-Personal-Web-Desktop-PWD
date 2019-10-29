export function setup () {
  // returns the UI Object.
  return UI()
}

export function loop (app) {
  console.log('Never')
}

export function kill (app) {
  console.log(app.name + ' kill')
  const temp = app.workinkObject.parentElement
  temp.parentElement.removeChild(temp)
}

export function UI () {
  const p = document.createElement('div')
  p.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  return p
}

export function minimising () {

}

export function focus (app) {
}
