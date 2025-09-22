
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.imageCollage}>
        <Image
          alt="Heads of State movie poster"
          style={[styles.image, styles.image1]}
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4I49dHv_OwldhGFQDLxiyEIz4zbEU0kfmHtqDKMX_rVys-0aH5EQ1RjMWh08WWZQxVw4rWjV7LLSVm1MZkTT8liA9h8fCswU-YcXiEJcWx2F2u2oq-Uj7KWB1a7iZoc5XbGsFwS0dDuK-j28gawDVgGih2HcFpAeawfJu7jv1iHmqEXTsl2opF91P-4XHur2mNM_Rg9xvd5GVcKoWDFEOeixY8o-aDfIW87Pcy_x29FDQ40dsS1LLZspo4PCvtE8IQO6dXnc1Wkyu' }}
        />
        <Image
          alt="Formula 1 movie poster"
          style={[styles.image, styles.image2]}
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxzPGjc3bWmQfac_K_NqNNckNoLbeaOUV1AzT6OzklhP0iNADF9zoEOgKOMciXOmX8J9ElJqeps9ix2DgLXLaNnHBGrIplhgnGiD8NmTsYconHILnz63v00wIuLlgYDb_mBKgu6NL2VJxEHJrtqLXF5bd7St44xLiuiepKHdOXiTv-G-kg284vKtt4klo5NUpLrGTmAOdc0cz0A5cft4gU6ZZnp8pM-onDD38kkrPIaZEhYTE8TJfQKAR9REvC5l_mjPUNpGASuSoT' }}
        />
        <Image
          alt="Baldwin movie poster"
          style={[styles.image, styles.image3]}
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYG0mzfphQ1vIPEuPwjNKfn0mOQ7JzbRR6_BsWK91NyO_0nWZNfns7Gkos0vf9w9ksKb9qeC3VIkEGaPS5IE3wt0QKFfIY5CSrbm4jlZBanpKwoYcznECdX9QWDYY6tuLPEOPl7SKaMYYGp0zKaVIwixfZmheUMgikzhPEpfFLdyWZ8X14UANneh1row5vNDsIApyDqvauqrVjjrgpu_Bn3iXlgqDFyjuMQPVaSyM37JuGcXcFL2Vb8WLJG-oAtuP7_yYwU0WzDidS' }}
        />
        <Image
          alt="Iron Man movie poster"
          style={[styles.image, styles.image4]}
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWWKlXqBaBtY_LzBufRGv8XoabFrZXQ6NlfZVmFiA59E4Z0P1zNt93pofHMS5emhYTlW5MTp4mO8Gj6Qtzrjo39wFClNaMd_klPILsOAXrWzq93Lfi41dEMCEBaAaZY4TRdQ3VE_vxOEUrsVtbnkXY4NGYuIIU4-faf4toFFJR7v6TPH9uN8noGLPE-Q72j5T7z33a8VGUMUYV9QoYfDzkuiDgq8m1WATGxQuAVxSqTRV_J547hobzcDcu0rjPAgHA26ICPBJUgVS8' }}
        />
        <Image
          alt="The Pope's Exorcist movie poster"
          style={[styles.image, styles.image5]}
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWsvuhbiKe5zb_o2ag_1TWIEqSeBGY5uH1lJ5gYIUxZsA83XzbSrLST8FLxBtxiLWyUMjwEYoaJU0eehSIDh2qamXWJMtkcx8tSc_FP1sTyztx-7U450MOwJ6LpmZK_YinYA-mEK9K1sD2rUs_j81-MZvzFBqzVBt9RKdieKdfCFztuT_idCLbeFJZCjG8XYdeMHQTaloC7yroogeGXrgmig66hPVMISEkViV17S00KU6FVVb_-ErsF2PriAbvKISkqk3jfzjwWyno' }}
        />
        <Image
          alt="Tom Cruise movie poster"
          style={[styles.image, styles.image6]}
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9rTauImsdNHRYZFq4Qbhx8qYyPTqcRy-8ILQ6t3KhEqVjciaYiJb2BGUTH9szlOgrT-PHD0tnSrmHy8uzzGEtsM6vmRuC7zCmUMdgGMMVBCyKCsPNrsFqFCsDd-_PqWL0163WaWx2n6a68qsvczCVK4RINdUbQWzneQsfA5oa4mxlHR2_EoF8pbnqFdCsH4eZP4guP0m5edkGi5xUSLdnmyq8cRQEuSTW29ETaWnL2fsr4GbZ36_GLKvT-acsodjJn4iZ14GmuJxV' }}
        />
        <Image
          alt="A man looks up movie poster"
          style={[styles.image, styles.image7]}
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-zR1-AlXcHW4i_poAeW-VpK9yzkyuRdmzrTshoJh5Lsd6USWyewBkomZEiox58IHdVxOKGmN6XSOKhmt9JJ-ym9yhScHvrcZgFLuGkG4ZnSMvAsBktge2jxXCbJ0rEhMjYSCFB-u8c_DyMdQC2zM-sfLovQwixQbpvOxrXRQJfbxV0OM2DLnvxluA7c5g8CzEM1h4tBtfDzhupXaxJRVWygN1-yHrXMGHoCKxD8SBdjYOWWNNt_DjvnaICBxR_Kv76C7x8fv89reC' }}
        />
        <Image
          alt="Weapons movie poster"
          style={[styles.image, styles.image8]}
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUKSoJ83t54sJEqJ9EmXD6CMN4NVQL7WnFrUEP0qwK7ZgTGVWhj2Ao3lClXxCdrQumIr4BUm-BIam7rq07j2X2W-QDanuMU3-mBtZhXXTSHmXeO48c2DKrv5KL1v3iCMBzRos-rpPa6ye4D6u1ffT93Qc_NdlwC-vVClfYJeC9w_lJEMm6Hsz0y14wIlKniX_Nir-4rbd_BVsTn20oM-jj9hrD45kIKnP6sYQa-zBFE-xAcMX4XrINhMU4g6hNTW7B1YilKhypd4iW' }}
        />
        <Image
          alt="Happy Gilmore 2 movie poster"
          style={[styles.image, styles.image9]}
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpSu--IyYz1scRx_8QTY7AS1lXpsaMb0tCMf6jLAXt7BzHgM7QenMnO0elJdlMekxidwVzh-pNC0sVPAw5nIbIu9SiQbGGID1oDTwF8AxRCtIkREMS-mKTGYE8ByKEF6Spk1TNwk84OPsZ-2P0vu5M8bRqfwmBNBIwGBNetfp5yKUXa5tD6Mfye-6rMDN3v7ygV7zXfLwP8a_mgiGMaoIFrE4LVi8vF7u96K6qt6YFgmI4L6xwUg3zHy2C1rC8jshK9WJqw7EeIhh5' }}
        />
      </View>
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'black']}
        style={styles.gradient}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Cinema Ticket Booking</Text>
        <Text style={styles.subtitle}>
          Discover and book the latest movies at your favorite cinemas. Easy and fast!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/home')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.bottomLine} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  imageCollage: {
    position: 'absolute',
    width: width * 1.5,
    height: height,
    transform: [{ rotateY: '-25deg' }, { scale: 1.1 }],
  },
  image: {
    position: 'absolute',
    width: 112,
    height: 160,
    borderRadius: 8,
  },
  image1: { top: height * 0.1, left: width * 0.1 },
  image2: { top: height * 0.3, left: width * 0.1 },
  image3: { top: height * 0.5, left: width * 0.1 },
  image4: { top: height * 0.1, left: width * 0.4 },
  image5: { top: height * 0.3, left: width * 0.4 },
  image6: { top: height * 0.5, left: width * 0.4 },
  image7: { top: height * 0.1, left: width * 0.7 },
  image8: { top: height * 0.3, left: width * 0.7 },
  image9: { top: height * 0.5, left: width * 0.7 },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 2,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 999,
    marginTop: 32,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomLine: {
    width: 144,
    height: 4,
    backgroundColor: '#4B5563',
    borderRadius: 999,
    marginTop: 32,
  },
});

export default SplashScreen;
