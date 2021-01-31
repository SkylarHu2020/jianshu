import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'


const defaultState = fromJS({
  title: 'Tomorrow X Together',
  content: '<img src="https://scontent.fhkg3-1.fna.fbcdn.net/v/t1.0-9/51168282_1957999711176001_8816306542757281792_n.jpg?_nc_cat=110&ccb=2&_nc_sid=110474&_nc_ohc=7sBG4SGnopcAX_x5sB6&_nc_ht=scontent.fhkg3-1.fna&oh=12fd5367adb15d5876b7b8315fb25523&oe=603C6359" alt=""/><p>It is been settled, Big Hit Entertainment just confirmed that their new and upcoming idol group TXT will be a five-member idol group.</p><p>An official photo of all five members, YeonJun (19), Hueningkai (16), BeomGyu (17), SooBin (18), and TaeHyun (16) has just been released. In addition, their official ages have also been revealed by Big Hit Entertainment as well.</p><p>However, one piece of information that has not yet been revealed to the public is the actual debut date of TXT.</p>'
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}