import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DatePicker from 'react-native-date-picker';
import { format } from 'date-fns';
import  CheckBox  from "@react-native-community/checkbox";
import Config from '../../../../app.json';
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
import IconClose from '../../../assets/icons/close.svg';
import { AntDesign, Feather} from '@expo/vector-icons';
import { Container, InputArea, ModalMap, 
    ModalView,RepeatText, Modalheader, MapArea, List, 
    LocationView, LocationBorder, ListLocation, 
    ModalCategory, Item, ItemArea, ItemBorder, 
    ModalRepeat, ViewRepeat, ModalHeaderRepeat,
    ItemFrequency, CloseButton, Transparent, ItemAreaFrequency, AreaListFrequency } from './styles'; 
import {  PermissionsAndroid } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { api } from "../../../services/api"

export default () => {
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categoryField, setCategoryField] = useState('Categoria');
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState(new Date());
    const [openTime, setOpenTime] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
    const [categoryId, setCategoryId] = useState('');
    const [selectedFrequency, setSelectedFrequency] = useState('Repetir Evento?');
    const [position, setPosition] = useState({ 
        latitude: -15.81913248419912, 
        longitude: -48.06534900010115,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421});
    const [extendedLocalization, setExtendedLocalization] = useState({
        latitude: 0, 
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        address: 'Localização'
    })
    const [dateString, setDateString] = useState(format(date,"dd/MM/yyyy"));
    const [timeString, setTimeString] = useState(format(date,"HH:mm"));
    const [checkbox, setCheckbox] = useState(false);
    const [repeat, setRepeat] = useState({
        isOn: false,
        frequency:''
    })
    const [openRepeat, setOpenRepeat] = useState(false);
    const [category, setCategory] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        async function loadInfo(){
            const response = await api.get('/categorys');
            setCategory(response.data.category) 
            }
    loadInfo();
    }, [])

    async function handleCreateEvent(){
       
        if(title === '' || description === ''|| categoryId === '' || date === '' || time === ''){
            alert('Preencha os campos!')
        } 
        setLoading(true);

        if(checkbox){
            setRepeat({
                isOn:true,
                frequency:selectedFrequency
            })
        }
        const get = await api.get('/planning');
        const planningId = get.data.planning.id;

        const response = await api.post('/event', {
            title,
            description,
            date,
            time,
            planningId,
            categoryId,
            extendedLocalization, 
            repeat
        })

        const data =  response.data;
        setTitle('');
        setDescription('');
        setCategoryId('');
        setCategoryField('Categoria');
        setDate(new Date());
        setTime(new Date());
        setTimeString(format(date,"HH:mm"));
        setDateString(format(date,"dd/MM/yyyy"));
        setExtendedLocalization({
            latitude: 0, 
            longitude: 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            address: 'Localização'
        })
        setCheckbox(false);
        setRepeat({
            isOn: false,
            frequency:''
        })

        navigation.navigate('Home', data);

        setLoading(false);
    }

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
                setCategoryId(item.id);
                setModalCategoryVisible(false);
                setCategoryField(item.title);
            }}
            >
               {categoryId === item.id && (
                <AntDesign name="checksquare" size={24} color="#6294B2"  />
            )}
            {categoryId !== item.id && (
                <Feather name="square" size={24} color="rgba(255, 152, 95, 0.8)" />
            )}
                <ItemBorder>
                    <Item>{item.title}</Item>
                </ItemBorder>
            </ItemArea> 
        )
    }

    function handleCheck(){
       if(checkbox){
        setCheckbox(false);
        setSelectedFrequency('Repetir evento?');
       }else{
        setCheckbox(true);
        setOpenRepeat(true);
       }
       
    }

    function renderFrequency(){
        return( 
            <AreaListFrequency>
                <ItemAreaFrequency onPress={() => {
                setSelectedFrequency('Diário');
                setOpenRepeat(false);
            }}
            >
               {selectedFrequency === 'Diário' && (
                <AntDesign name="checksquare" size={22} color="#6294B2" style={{marginRight:10}}  />
            )}
            {selectedFrequency !== 'Diário' && (
                <Feather name="square" size={22} color="rgba(255, 152, 95, 0.8)" style={{marginRight:10}} />
            )}
                
                    <ItemFrequency>Diário</ItemFrequency>
                
            </ItemAreaFrequency> 
            <ItemAreaFrequency onPress={() => {
                setSelectedFrequency('Semanal');
                setOpenRepeat(false);
            }}
            >
               {selectedFrequency === 'Semanal' && (
                <AntDesign name="checksquare" size={22} color="#6294B2" style={{marginRight:10}}  />
            )}
            {selectedFrequency !== 'Semanal' && (
                <Feather name="square" size={22} color="rgba(255, 152, 95, 0.8)" style={{marginRight:10}} />
            )}
                
                    <ItemFrequency>Semanal</ItemFrequency>
                
            </ItemAreaFrequency> 
            <ItemAreaFrequency onPress={() => {
                setSelectedFrequency('Mensal');
                setOpenRepeat(false);
            }}
            >
               {selectedFrequency === 'Mensal' && (
                <AntDesign name="checksquare" size={22} color="#6294B2" style={{marginRight:10}} />
            )}
            {selectedFrequency !== 'Mensal' && (
                <Feather name="square" size={22} color="rgba(255, 152, 95, 0.8)" style={{marginRight:10}} />
            )}
                
                    <ItemFrequency>Mensal</ItemFrequency>
                
            </ItemAreaFrequency> 
            <ItemAreaFrequency onPress={() => {
                setSelectedFrequency('Anual');
                setOpenRepeat(false);
            }}
            >
               {selectedFrequency === 'Anual' && (
                <AntDesign name="checksquare" size={22} color="#6294B2" style={{marginRight:10}} />
            )}
            {selectedFrequency !== 'Anual' && (
                <Feather name="square" size={22} color="rgba(255, 152, 95, 0.8)" style={{marginRight:10}}/>
            )}
                
                    <ItemFrequency>Anual</ItemFrequency>
                
            </ItemAreaFrequency> 
            </AreaListFrequency>
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
                    value={title}
                    onChangeText={setTitle}
                    multipleLine={false}
                />
                <LineInput
                    IconSvg={IconDescription}
                    placeholder="Descrição"
                    value={description}
                    onChangeText={setDescription}
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
                    data={category}
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
                    date={date}
                    mode="date"
                    minimumDate={new Date()}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        setDateString(format(date,"dd/MM/yyyy"))
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
                    date={time}
                    mode="time"
                    onConfirm={(time) => {
                        setOpenTime(false)
                        setTime(time)
                        setTimeString(format(time,"HH:mm"))
                    }}
                    onCancel={()=>{
                        setOpenTime(false)
                    }}
                />
                <TouchableOpacity onPress={()=> setModalVisible(true)}>
                    <InputDate
                        IconSvg={IconMap}
                        value={extendedLocalization.address}
                    />
                 </TouchableOpacity>
               
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
                                setExtendedLocalization({
                                    latitude: details.geometry.location.lat, 
                                    longitude: details.geometry.location.lng,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                    address: data.description
                                })
                    
                             }}
                            query={{
                            key: Config.android.config.googleMaps.apiKey,
                            language: 'pt-br',
                            }}
                            fetchDetails={true}
                            styles={{listView:{zIndex:9999999, width:360},
                            textInputContainer:{width:360, padding:0}}}
                            />
                            </LocationBorder>
                            </ListLocation>
                            </LocationView>
                            <MapArea>
                            
                               <MapView
                               style={{ width:380, height:550, padding:0, zIndex:-1, top:20}}
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
                    <ItemArea>
                        <TouchableOpacity onPress={() => handleCheck()}>
                        <CheckBox
                        disabled={false}
                        value={checkbox}
                        onValueChange={setCheckbox}
                        tintColors={{true:'#FF985F', false:'#FF985F'}}  
                        />
                        </TouchableOpacity>
                    
                        <RepeatText>{selectedFrequency}</RepeatText>

                    </ItemArea>
                    <ModalRepeat
                    animationType="slide"
                    transparent={true}
                    visible={openRepeat}
                    onRequestClose={()=> {
                        setOpenRepeat(!openRepeat)
                    }}
                    >
                        <Transparent>
                        <ViewRepeat>
                        <ModalHeaderRepeat>
                        <CloseButton onPress={() => {setOpenRepeat(!openRepeat); setCheckbox(false)} }>
                    <IconClose width="20" height="20" fill="#FFFFFF"/>
                            </CloseButton>
                            
                 
             </ModalHeaderRepeat>
                        {renderFrequency(selectedFrequency)}
                        </ViewRepeat>
                        </Transparent>
                    </ModalRepeat>
             
             { loading ? (
            <ActivityIndicator size={45} color="#FFF"/>
          ) :(<SmallCustomButton
                onPress={handleCreateEvent}
                    buttonName="SALVAR"
                ></SmallCustomButton>)}
                
            </InputArea>
        </Container>
    )
}