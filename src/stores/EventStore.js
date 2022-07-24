import { defineStore } from 'pinia'
import EventService from '../services/EventService.js'

export const useEventStore = defineStore('EventStore', {
  state() {
    return {
      events: [],
      event: {}
    }
  },
  getters: {
    numberOfEvents: state => state.events.length
  },
  actions:{
    fetchEvents(){
        return EventService.getEvents()
            .then(response => {
                this.events = response.data;
            })
            .catch(error => {
                throw error
            })
    },
    createEvent(event){
        return EventService.getEvents()
        .then(response => {
            this.events.push(event)
        })
        .catch(error => {
          throw error
        })
    },
    fetchEvent(id){
        const existingEvent = this.events.find(event => event.id === id);
        if(existingEvent){
            this.event = existingEvent;

        }else{
            return EventService.getEvent(id)
          .then(response => {
            this.event = response.data;
          })
          .catch(error => {
            throw error
          })
        }
    }
   
  }
})
