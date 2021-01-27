export const ADD_NOTE: string = 'ADD_NOTE',
  REMOVE_NOTE: string = 'REMOVE_NOTE'

export const addNote = (note: any) => {
  return {
    type: ADD_NOTE,
    payload: note
  }
}