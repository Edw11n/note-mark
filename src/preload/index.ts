import { contextBridge } from 'electron'

if (process.contextIsolated) {
  throw new Error('Context Isolation must be enabled')
}
try {
  contextBridge.exposeInMainWorld('context', {
    //TODO
  })
} catch (error) {
  console.error('Error exposing context:', error)
}
