import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DatePicker from 'react-native-date-picker';
import { format, parseISO } from 'date-fns';
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
    ModalView,RepeatText, Modalheader, MapArea, List, ListLocation, LocationView,
    LocationBorder, ModalCategory, Item, ItemArea, ItemBorder, 
    ModalRepeat, ViewRepeat, ModalHeaderRepeat,
    ItemFrequency, CloseButton, Transparent, ItemAreaFrequency, AreaListFrequency } from './styles'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { api } from "../../../services/api"


export default ({navigation, route}) => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const OldCategoryId = route.params.categoryId;
    const eventId = route.params.id;
    const [categoryId, setCategoryId] = useState('');
    const [categoryField, setCategoryField] = useState();
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [selectedFrequency, setSelectedFrequency] = useState();
    const [category, setCategory] = useState();
    const [dateString, setDateString] = useState();
    const [timeString, setTimeString] = useState();
    const [checkbox, setCheckbox] = useState(false);

    const OldBoolean = route.params.repeat[0].isOn;
    const [repeat, setRepeat] = useState({
        isOn: false,
        frequency:''
    })
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

    const [open, setOpen] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
    const [openRepeat, setOpenRepeat] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingB, setLoadingB] = useState(false);
    
    useEffect(()=> {
        setLoadingB(true)
        async function findCategory(){
            const response = await api.get('/category/detail', {
                params:{
                    categoryId: OldCategoryId
                }
            })
            setCategoryField(response.data[0].title);
            setCategoryId(OldCategoryId);
            setTitle(route.params.title);
            setDescription(route.params.description);
            setDate(parseISO(route.params.date));
            setDateString(format(parseISO(route.params.date), "dd/MM/yyyy"));
            setTime(parseISO(route.params.time));
            setTimeString(format(parseISO(route.params.time), "HH:mm"));
            setPosition({
                latitude: route.params.extendedLocalization[0].latitude, 
                longitude: route.params.extendedLocalization[0].longitude,
                latitudeDelta: route.params.extendedLocalization[0].latitudeDelta,
                longitudeDelta: route.params.extendedLocalization[0].longitudeDelta
            })
            setExtendedLocalization({
                latitude: route.params.extendedLocalization[0].latitude, 
                longitude: route.params.extendedLocalization[0].longitude,
                latitudeDelta: route.params.extendedLocalization[0].latitudeDelta,
                longitudeDelta: route.params.extendedLocalization[0].longitudeDelta,
                address: route.params.localization
            })
            if(OldBoolean === true){
                setSelectedFrequency(route.params.repeat[0].frequency);
                setCheckbox(true);
            }else{
                setSelectedFrequency('Repetir Evento?')
                setCheckbox(false);
            }
            setLoadingB(false);
            
        }
        async function loadInfo(){
            const response = await api.get('/categorys');
            setCategory(response.data.category) 
            }
        findCategory();
        loadInfo();
        

    }, [OldCategoryId],[OldBoolean],[route.params.title], 
    [route.params.description], [route.params.date], [route.params.time], 
    [route.params.repeat[0].frequency], [route.params.extendedLocalization[0].latitude],
    [route.params.extendedLocalization[0].longitude], [route.params.extendedLocalization[0].latitudeDelta],
    [route.params.extendedLocalization[0].longitudeDelta], [route.params.localization])

    async function handleUpdateEvent(){
       
        if(title === '' || description === ''|| categoryId === '' || date === null || time === null){
            alert('Preencha os campos!')
            return;
        } 
        setLoading(true);

        if(checkbox){
            setRepeat({
                isOn:true,
                frequency:selectedFrequency
            })
        }

        const response = await api.put('/event/edit', {
            eventId,
            title,
            description,
            date,
            time,
            categoryId,
            extendedLocalization, 
            repeat
        })

        navigation.navigate('Home');

        setLoading(false);
    }

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
        setSelectedFrequency('Repetir evento?');
        setCheckbox(false);
        
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
            
            {loadingB?(<ActivityIndicator size={100} color="#FFF"/>):(<InputArea>
            <LineInput
                    IconSvg={IconTitle}
                    placeholder={title}
                    value={title}
                    onChangeText={setTitle}
                    multipleLine={false}
                />
                <LineInput
                    IconSvg={IconDescription}
                    placeholder={description}
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
                    minimumDate={date}
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
                        
                        <ModalRepeat
                    animationType="slide"
                    transparent={true}
                    visible={openRepeat}
                    onRequestClose={()=> {
                        setOpenRepeat(false)
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

                    </ItemArea>
                   
             
             { loading ? (
            <ActivityIndicator size={45} color="#FFF"/>
          ) :(<SmallCustomButton
                onPress={handleUpdateEvent}
                    buttonName="SALVAR"
                ></SmallCustomButton>)}

                <ModalMap
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={()=> {
                        setModalVisible(!modalVisible)
                    }}
                   >
                       <ModalView>
                            <Modalheader>
                            <AntDesign.Button backgroundColor="#ffffff" name="close" size={24} color="#ff985f" onPress={() => setModalVisible(!modalVisible)} />
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


            </InputArea>)}
        </Container>
    )
}