import {DatabaseError} from './DatabaseError'

class CommonErrorsFactory {
  static databaseError = ({code, message}) => new DatabaseError({code, message})
}

export {CommonErrorsFactory}
