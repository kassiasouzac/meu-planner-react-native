import React, { useState, useContext } from "react";
import MapView, { Marker } from "react-native-maps";
import CheckBox from "@react-native-community/checkbox";
import Geolocation from 'react-native-geolocation-service';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DatePicker from 'react-native-date-picker';
import { format } from 'date-fns';

import Config from '../../../../app.json';
import { eventsCategory } from '../../../files/eventsCategory';

import TitleImage from '../../../components/TitleImage';
import LineInput from "../../../components/LineInput";
import SmallCustomButton from "../../../components/SmallCustomButton";
import InputDate from "../../../components/InputDate";
import Select from "../../../components/Select";


import Event from '../../../assets/event.svg';
import IconTitle from '../../../assets/icons/file-lines-solid.svg';
import IconDescription from '../../../assets/icons/text.svg';
import IconCalendar from '../../../assets/icons/calendar.svg';
import IconCategory from '../../../assets/icons/category.svg';
import IconClock from '../../../assets/icons/clock.svg';
import IconMap from '../../../assets/icons/map.svg';
import { AntDesign, Feather} from '@expo/vector-icons';


import { Container, InputArea, ModalMap, 
    ModalView,LocalButton, LocalButtonText, 
    ButtonArea, Modalheader, MapArea, List, 
    LocationView, LocationBorder, ListLocation, 
    ModalCategory, Item, ItemArea, ItemBorder } from './styles'; 
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, PermissionsAndroid } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default () => {
    const [titleField, setTitleField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');
    const [categoryField, setCategoryField] = useState('Categoria');
    const [dateField, setDateField] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [timeField, setTimeField] = useState(new Date());
    const [openTime, setOpenTime] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
    const [toggleCheckbox, setToggleCheckbox] = useState(false);
    const [selected, setSelected] = useState('');
    const [position, setPosition] = useState({ 
        latitude: -15.81913248419912, 
        longitude: -48.06534900010115,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,});
    const [location, setLocation] = useState({
        latitude: 0, 
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        address: ''
    })
    const [dateString, setDateString] = useState(format(dateField,"dd/MM/yyyy"));
    const [timeString, setTimeString] = useState(format(dateField,"HH:mm"));

    const request_location_runtime_permission = async () => {
        try{
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Permissão de Localização',
                    message: 'A aplicação precisa da permissão de localização.',
                },
            );
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                Geolocation.getCurrentPosition(
                    pos => {
                        setPosition({
                        ...position,
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                        });
                        },
                        error => {
                        console.log(error);
                        Alert.alert('Houve um erro ao pegar a latitude e longitude.');
                        },
                );
            }else{
                Alert.alert('Permissão de localização não concedida');
            }
        }catch(err){
            console.log(err);
        }
    };

    function renderOption(item){
        return( 
            <ItemArea onPress={() => {
                setSelected(item.id);
                setModalCategoryVisible(false);
                setCategoryField(item.title);
            }}
            >
               {selected === item.id && (
                <AntDesign name="checksquare" size={24} color="#6294B2"  />
            )}
            {selected !== item.id && (
                <Feather name="square" size={24} color="rgba(255, 152, 95, 0.8)" />
            )}
                <ItemBorder>
                    <Item>{item.title}</Item>
                </ItemBorder>
            </ItemArea> 
        )
    }
   
  
    return (
        <Container>

            <TitleImage 
            Title="Evento" 
            EventSvg={Event}/>
            
            <InputArea>
            <LineInput
                    IconSvg={IconTitle}
                    placeholder="Título"
                    value={titleField}
                    onChangeText={setTitleField}
                    multipleLine={false}
                />
                <LineInput
                    IconSvg={IconDescription}
                    placeholder="Descrição"
                    value={descriptionField}
                    onChangeText={setDescriptionField}
                    multipleLine={true}
                />
                 <TouchableOpacity onPress={() => setModalCategoryVisible(true)}>
                 <Select
                    IconSvg={IconCategory}
                    value={categoryField}
                />
                 </TouchableOpacity>

                 <ModalCategory
                    animationType="slide"
                    visible={modalCategoryVisible}
                    onRequestClose={()=> {
                    setModalCategoryVisible(false)
                    }}
                >
            <Modalheader>
                <AntDesign.Button backgroundColor="#ffffff" name="close" size={20} color="#ff985f" onPress={() => setModalCategoryVisible(!modalCategoryVisible)} />
             </Modalheader>
                <ModalView>
                    <List
                    data={eventsCategory}
                    keyExtractor={(item) => (item.id)}
                    renderItem={({item}) => renderOption(item)}
                    />
                </ModalView>
        </ModalCategory>
               
                 <TouchableOpacity onPress={() => setOpen(true)}>
                 <InputDate
                    IconSvg={IconCalendar}
                    value={dateString}
                />
                 </TouchableOpacity>
                
                <DatePicker
                    modal
                    open={open}
                    date={dateField}
                    mode="date"
                    minimumDate={new Date()}
                    onConfirm={(dateField) => {
                        setOpen(false)
                        setDateField(dateField)
                        setDateString(format(dateField,"dd/MM/yyyy"))
                    }}
                    onCancel={()=>{
                        setOpen(false)
                    }}
                />

                <TouchableOpacity onPress={() => setOpenTime(true)}>
                 <InputDate
                    IconSvg={IconClock}
                    value={timeString}
                />
                 </TouchableOpacity>

                 <DatePicker
                    modal
                    open={openTime}
                    date={timeField}
                    mode="time"
                    onConfirm={(timeField) => {
                        setOpenTime(false)
                        setTimeField(timeField)
                        setTimeString(format(timeField,"HH:mm"))
                    }}
                    onCancel={()=>{
                        setOpen(false)
                    }}
                />

                    <ButtonArea>
                        <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        colors={['#ff985f', 'rgba(255, 152, 95, 0.62)']}
                        style={{borderRadius: 30, marginTop:15}}
                    >
                    <LocalButton onPress={()=> setModalVisible(true)}>
                    <IconMap width="24" height="24" fill="#FFFFFF"/>
                    <LocalButtonText>
                        BUSCAR LOCALIZAÇÃO DO EVENTO
                        </LocalButtonText>
                    </LocalButton>
                    </LinearGradient>
                    </ButtonArea>
               
                   <ModalMap
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={()=> {
                        setModalVisible(!modalVisible)
                    }}
                   >
                       <ModalView>
                            <Modalheader>
                                <AntDesign.Button backgroundColor="#ffffff" name="close" size={20} color="#ff985f" onPress={() => setModalVisible(!modalVisible)} />
                            </Modalheader>
                            <LocationView>
                            <ListLocation>
                            <LocationBorder>
                            <GooglePlacesAutocomplete
                             placeholder='Onde será seu evento?'
                            onPress={(data, details = null) => {
                                setPosition({ 
                                    latitude: details.geometry.location.lat, 
                                    longitude: details.geometry.location.lng,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421
                                })
                                setLocation({
                                    latitude: details.geometry.location.lat, 
                                    longitude: details.geometry.location.lng,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                    address: data.description
                                })
                                console.log( location);
                             }}
                            query={{
                            key: Config.android.config.googleMaps.apiKey,
                            language: 'pt-br',
                            }}
                            fetchDetails={true}
                            styles={{listView:{maxHeight:300},
                            textInputContainer:{width:300, padding:0}}}
                            />
                            </LocationBorder>
                            </ListLocation>
                            </LocationView>
                            <MapArea>
                            
                               <MapView
                               style={{ width:380, height:600, padding:20}}
                               showsUserLocation={true}
                               region={position}
                               onPress={e =>
                                setPosition({
                                ...position,
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude,
                                })}
                               >
                                   <Marker
                                   draggable={true}
                                   coordinate={position}
                                   onDragEnd={e =>
                                    setPosition({
                                    ...position,
                                    latitude: e.nativeEvent.coordinate.latitude,
                                    longitude: e.nativeEvent.coordinate.longitude,
                                    })}
                                   />
    
                               </MapView>
                            </MapArea>
                       </ModalView>
                    </ModalMap>
                
  
                <SmallCustomButton
                    buttonName="SALVAR"
                ></SmallCustomButton>
                
            </InputArea>
        </Container>
    )
}