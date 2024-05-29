import { Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function MoviesCard(props) {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        marginLeft: 20,
        
    }
})