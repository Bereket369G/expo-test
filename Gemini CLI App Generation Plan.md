# Gemini CLI App Generation Plan: Cinema Ticket Booking App

**Project Goal:** To convert a full set of HTML and Tailwind CSS designs into a functional, multi-screen cinema ticket booking mobile application for iOS and Android using the Expo framework.

**Core Technologies:**
*   **Framework:** React Native with Expo
*   **Language:** JavaScript
*   **Styling:** React Native `StyleSheet` (translating from the provided HTML with inline Tailwind CSS)
*   **Navigation:** React Navigation (Stack Navigator)

**App Navigation Flow:**
`Splash Screen` -> `Home Screen` -> `Movie Detail Screen` -> `Seat Selection Screen` -> `Checkout Confirmation Screen`

---

### **1. Splash Screen Component**

**Gemini Instructions:**
*   **Source:** The HTML provided below.
*   **Implementation:**
    *   Use a main `<View>` with a dark background (`#000000`).
    *   Recreate the 3D-effect background collage using absolutely positioned `<Image>` components with the specified transforms (rotation and translation).
    *   Overlay a gradient `<View>` to match the design.
    *   Use `<Text>` for the title ("Cinema Ticket Booking") and the descriptive paragraph.
    *   The "Get Started" button will be a `<TouchableOpacity>` that, on press, navigates the user to the `Home Screen`.

**Provided Code:**

```html
<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Cinema Ticket Booking</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<style type="text/tailwindcss">
    @layer utilities {
      .transform-style-3d {
        transform-style: preserve-3d;
      }
      .perspective {
        perspective: 1000px;
      }
      .rotate-y-25 {
        transform: rotateY(25deg);
      }
      .rotate-y-m25 {
        transform: rotateY(-25deg);
      }
      .translate-z-m1 {
        transform: translateZ(-1rem);
      }
    }
  </style>
<script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#10B981", // Emerald 500
            "background-light": "#FFFFFF",
            "background-dark": "#000000",
          },
          fontFamily: {
            display: ["'Inter'", 'sans-serif'],
          },
          borderRadius: {
            DEFAULT: "0.75rem",
          },
        },
      },
    };
  </script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark font-display">
<div class="flex flex-col h-screen">
<div class="relative flex-1 flex items-center justify-center overflow-hidden perspective">
<div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black to-black"></div>
<div class="grid grid-cols-3 gap-2 transform-style-3d rotate-y-m25 scale-110">
<div class="flex flex-col gap-2">
<img alt="Heads of State movie poster" class="w-28 h-40 object-cover rounded-lg transform -translate-y-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4I49dHv_OwldhGFQDLxiyEIz4zbEU0kfmHtqDKMX_rVys-0aH5EQ1RjMWh08WWZQxVw4rWjV7LLSVm1MZkTT8liA9h8fCswU-YcXiEJcWx2F2u2oq-Uj7KWB1a7iZoc5XbGsFwS0dDuK-j28gawDVgGih2HcFpAeawfJu7jv1iHmqEXTsl2opF91P-4XHur2mNM_Rg9xvd5GVcKoWDFEOeixY8o-aDfIW87Pcy_x29FDQ40dsS1LLZspo4PCvtE8IQO6dXnc1Wkyu"/>
<img alt="Formula 1 movie poster" class="w-28 h-40 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxzPGjc3bWmQfac_K_NqNNckNoLbeaOUV1AzT6OzklhP0iNADF9zoEOgKOMciXOmX8J9ElJqeps9ix2DgLXLaNnHBGrIplhgnGiD8NmTsYconHILnz63v00wIuLlgYDb_mBKgu6NL2VJxEHJrtqLXF5bd7St44xLiuiepKHdOXiTv-G-kg284vKtt4klo5NUpLrGTmAOdc0cz0A5cft4gU6ZZnp8pM-onDD38kkrPIaZEhYTE8TJfQKAR9REvC5l_mjPUNpGASuSoT"/>
<img alt="Baldwin movie poster" class="w-28 h-40 object-cover rounded-lg transform translate-y-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYG0mzfphQ1vIPEuPwjNKfn0mOQ7JzbRR6_BsWK91NyO_0nWZNfns7Gkos0vf9w9ksKb9qeC3VIkEGaPS5IE3wt0QKFfIY5CSrbm4jlZBanpKwoYcznECdX9QWDYY6tuLPEOPl7SKaMYYGp0zKaVIwixfZmheUMgikzhPEpfFLdyWZ8X14UANneh1row5vNDsIApyDqvauqrVjjrgpu_Bn3iXlgqDFyjuMQPVaSyM37JuGcXcFL2Vb8WLJG-oAtuP7_yYwU0WzDidS"/>
</div>
<div class="flex flex-col gap-2 -translate-y-8">
<img alt="Iron Man movie poster" class="w-28 h-40 object-cover rounded-lg transform -translate-y-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWWKlXqBaBtY_LzBufRGv8XoabFrZXQ6NlfZVmFiA59E4Z0P1zNt93pofHMS5emhYTlW5MTp4mO8Gj6Qtzrjo39wFClNaMd_klPILsOAXrWzq93Lfi41dEMCEBaAaZY4TRdQ3VE_vxOEUrsVtbnkXY4NGYuIIU4-faf4toFFJR7v6TPH9uN8noGLPE-Q72j5T7z33a8VGUMUYV9QoYfDzkuiDgq8m1WATGxQuAVxSqTRV_J547hobzcDcu0rjPAgHA26ICPBJUgVS8"/>
<img alt="The Pope's Exorcist movie poster" class="w-28 h-40 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWsvuhbiKe5zb_o2ag_1TWIEqSeBGY5uH1lJ5gYIUxZsA83XzbSrLST8FLxBtxiLWyUMjwEYoaJU0eehSIDh2qamXWJMtkcx8tSc_FP1sTyztx-7U450MOwJ6LpmZK_YinYA-mEK9K1sD2rUs_j81-MZvzFBqzVBt9RKdieKdfCFztuT_idCLbeFJZCjG8XYdeMHQTaloC7yroogeGXrgmig66hPVMISEkViV17S00KU6FVVb_-ErsF2PriAbvKISkqk3jfzjwWyno"/>
<img alt="Tom Cruise movie poster" class="w-28 h-40 object-cover rounded-lg transform translate-y-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9rTauImsdNHRYZFq4Qbhx8qYyPTqcRy-8ILQ6t3KhEqVjciaYiJb2BGUTH9szlOgrT-PHD0tnSrmHy8uzzGEtsM6vmRuC7zCmUMdgGMMVBCyKCsPNrsFqFCsDd-_PqWL0163WaWx2n6a68qsvczCVK4RINdUbQWzneQsfA5oa4mxlHR2_EoF8pbnqFdCsH4eZP4guP0m5edkGi5xUSLdnmyq8cRQEuSTW29ETaWnL2fsr4GbZ36_GLKvT-acsodjJn4iZ14GmuJxV"/>
</div>
<div class="flex flex-col gap-2">
<img alt="A man looks up movie poster" class="w-28 h-40 object-cover rounded-lg transform -translate-y-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-zR1-AlXcHW4i_poAeW-VpK9yzkyuRdmzrTshoJh5Lsd6USWyewBkomZEiox58IHdVxOKGmN6XSOKhmt9JJ-ym9yhScHvrcZgFLuGkG4ZnSMvAsBktge2jxXCbJ0rEhMjYSCFB-u8c_DyMdQC2zM-sfLovQwixQbpvOxrXRQJfbxV0OM2DLnvxluA7c5g8CzEM1h4tBtfDzhupXaxJRVWygN1-yHrXMGHoCKxD8SBdjYOWWNNt_DjvnaICBxR_Kv76C7x8fv89reC"/>
<img alt="Weapons movie poster" class="w-28 h-40 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUKSoJ83t54sJEqJ9EmXD6CMN4NVQL7WnFrUEP0qwK7ZgTGVWhj2Ao3lClXxCdrQumIr4BUm-BIam7rq07j2X2W-QDanuMU3-mBtZhXXTSHmXeO48c2DKrv5KL1v3iCMBzRos-rpPa6ye4D6u1ffT93Qc_NdlwC-vVClfYJeC9w_lJEMm6Hsz0y14wIlKniX_Nir-4rbd_BVsTn20oM-jj9hrD45kIKnP6sYQa-zBFE-xAcMX4XrINhMU4g6hNTW7B1YilKhypd4iW"/>
<img alt="Happy Gilmore 2 movie poster" class="w-28 h-40 object-cover rounded-lg transform translate-y-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpSu--IyYz1scRx_8QTY7AS1lXpsaMb0tCMf6jLAXt7BzHgM7QenMnO0elJdlMekxidwVzh-pNC0sVPAw5nIbIu9SiQbGGID1oDTwF8AxRCtIkREMS-mKTGYE8ByKEF6Spk1TNwk84OPsZ-2P0vu5M8bRqfwmBNBIwGBNetfp5yKUXa5tD6Mfye-6rMDN3v7ygV7zXfLwP8a_mgiGMaoIFrE4LVi8vF7u96K6qt6YFgmI4L6xwUg3zHy2C1rC8jshK9WJqw7EeIhh5"/>
</div>
</div>
</div>
<div class="bg-background-dark pt-8 pb-12 px-6 text-center z-10">
<h1 class="text-3xl font-bold text-white">Cinema Ticket Booking</h1>
<p class="text-gray-400 mt-4 text-base">Discover and book the latest movies at your favorite cinemas. Easy and fast!</p>
<button class="w-full bg-primary text-white py-4 mt-8 rounded-full font-semibold text-lg">
        Get Started
      </button>
<div class="w-36 h-1 bg-gray-700 rounded-full mx-auto mt-8"></div>
</div>
</div>
</body></html>
```

---

### **2. Home Screen Component**

**Gemini Instructions:**
*   **Source:** The HTML provided below.
*   **Implementation:**
    *   Use `<SafeAreaView>` and `<ScrollView>` for the main structure.
    *   **Header:** A `<View>` containing the user's `<Image>` avatar and `<Text>` for their name/username.
    *   **Search Bar:** A `<TextInput>` component styled with rounded borders and placeholder text, with icons on either side.
    *   **Carousels:** Use horizontal `<FlatList>` components for the main movie banner. Use `<FlatList>` with `numColumns={3}` for the "Top Movies" and "Upcoming Movies" grids. Each item should be a reusable movie poster component.
    *   **Navigation:** Tapping on any movie poster should navigate to the `Movie Detail Screen`.
    *   **Bottom Tab Bar:** A custom, floating `<View>` component positioned at the bottom, containing touchable icons.

**Provided Code:**

```html
<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Movie App</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#22C55E",
            "background-light": "#F9FAFB",
            "background-dark": "#1F2937",
            "surface-light": "#FFFFFF",
            "surface-dark": "#374151",
            "text-primary-light": "#111827",
            "text-primary-dark": "#FFFFFF",
            "text-secondary-light": "#6B7280",
            "text-secondary-dark": "#9CA3AF",
          },
          fontFamily: {
            display: ["Inter", "sans-serif"],
          },
          borderRadius: {
            DEFAULT: "12px",
          },
        },
      },
    };
  </script>
<style>
    body {
      font-family: 'Inter', sans-serif;
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark">
<div class="max-w-md mx-auto h-screen flex flex-col" id="app">
<header class="p-4 flex items-center gap-4 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700">
<img alt="Pitter Jackson avatar" class="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzUaocpM4-kzTn9W95630cUq03yD1Ls9vsm43gJ4zTIcGnc-tLu7wWIHfjGXQkhFblZ0PTQRmSrgz2fQ-WPH3ywAeQz6LoxHepuVWnWDSn9U4sOF4oNo1GgcCKpTqGpvfmFG641gJ1-TCGsyBGZMchM4c5HkmYh9cuBzUM7AAczW4eXGUd05Wtz7M0Pu1D5O8tU8URofT77jrTwWLToBXaqUWxNHr_GLkCO3iJy1sxoojGJrSPvQOOpHWMfqCxqNa-wkXhVz4wAEs"/>
<div>
<p class="font-semibold text-text-primary-light dark:text-text-primary-dark">Hello Pitter Jackson</p>
<p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">@pitterjackson</p>
</div>
</header>
<div class="p-4 bg-surface-light dark:bg-surface-dark">
<div class="relative">
<span class="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">search</span>
<input class="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-lg pl-10 pr-10 py-3 text-text-primary-light dark:text-text-primary-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark focus:ring-primary" placeholder="Search Movies..." type="text"/>
<span class="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">mic</span>
</div>
</div>
<main class="flex-1 overflow-y-auto pb-24">
<div class="pl-4">
<div class="flex overflow-x-auto space-x-3 py-4">
<div class="relative flex-shrink-0 w-80 h-44 rounded-lg overflow-hidden">
<img alt="The Lord of the Rings: Power poster" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdeHyioItgm4QRfSj28YTXcji9c6zaQim5vsXcay9qnJcIyQcrOc5zWBaS-CcPl6kriW9j-uzhJllG6cI9ztFJg7xMxxd4gkQmux1ZkA8zLH9q6YPQ2TF5Px9yKbfHxpsg05SlXC7IKnUsFyL6OM3uWaEqhJbZ8RHV28LwlGDj9sEOtdGX1pACHMrinWcmBzHPE-7bzwiVeuYC5SFTt6BOyH750Ld-F2br8yKyCm0OAOs86oPVMTzjxfDpn777bU3JimI2VpMkhC4"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<p class="absolute bottom-4 left-4 text-white font-bold text-lg">THE LORD OF THE RINGS: POWER</p>
</div>
<div class="relative flex-shrink-0 w-80 h-44 rounded-lg overflow-hidden">
<img alt="Avengers poster" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi_Uza3l5VV8iPP_3e9FCkXHw3WIA5N5ssPKXMgiizcuk7u7Sht1DFfS_0rh3otW0ev7_VZEVbv26zdXunrZBrkUDpNQ8n1rdrtUU6RN2HvNV-lxu9n6ecE99dttS5B-7cNYu_JoXncOokUt3dmeYx_VgcvrPmM_gBY5cVKewjcvh0yUrfzdC4UUEuAbdgstjFrShXcdnp8Dc-Wcz-RKF3wpBf-cdoTcy7wY_E4p4jZjpkuGi0jOPuQgyi18IdUdhhdjAwYUTup48"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<p class="absolute bottom-4 left-4 text-white font-bold text-lg">AVENGERS</p>
</div>
</div>
</div>
<div class="px-4 mt-6">
<div class="flex justify-between items-center mb-4">
<h2 class="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">Top Movies</h2>
<a class="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark" href="#">See all</a>
</div>
<div class="grid grid-cols-3 gap-4">
<div>
<img alt="The Gorge poster" class="rounded-lg mb-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqgMD6xLKS_vOWmvkZ5Vqqly4m3SXr8g-Ncph1hwLPNwAMlFCngSrAORQbWXunLxuFrGQh80pJe_lyNeSNHe6hA1mUyVqdYK9CGIHrhepuvu5JbTDqF20rMv10H9OouDTPWu2i8REk3z07_bkgfLtOVoeI0yRsh5M8YZ9E8z5HZCHHp7iFaFGtUGLsLZT_jsYyvCKyrm3MwGnutBZJtDbWBKbUG5Vrqyk_wFCydKdyRvGLrnAEwr_PC_k8-URVrfmrRQi147Al0lA"/>
<p class="font-semibold text-text-primary-light dark:text-text-primary-dark">The Gorge</p>
</div>
<div>
<img alt="Dune: Part Two poster" class="rounded-lg mb-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpW6BiQ6RsJyxUGFlf33fPzoOh2BuPeIjk-vVkiv-CQLxMFbQbZgBy2mvw44eg1QmcTAxC1mb-PI-f8gY4marKuIrS4tELuZCbikDBpTzYAArCFEi4l-tNKzTNx9fCs__MLPJtEpcYgBs7TQJd-pBuSleXIBp7ZzE_cFpTzY-bZNXskA0tWFwQcnaPeC2jiXbVo_JlsMjy0GqGS7fUzbULMCeXrl32MG6WefYl3cqsPBMctxVMeUKemAyJxekrdMsfhrJkSVBrwjU"/>
<p class="font-semibold text-text-primary-light dark:text-text-primary-dark">Dune: Part Two</p>
</div>
<div>
<img alt="Ordinary Angels poster" class="rounded-lg mb-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJGwmU40I5SALIHlNakHDUsTTdoT1cuoIbRX1o2Sf0DpeI1tHN8zzGfWnhf3Q5irb0oniFtnzeC-cKZBcX1uiUVfelVlML3OMGdUrhddxaGAjwg7AMWd_mYdDyZbwbY7Gpq0_utnakxGnkJ3_shxYDu1IX_WM6vZwkNBqUChN0RjFVLs8LGGxJiijv0fJ4vW7YV1WR29E1MvUkYhVzPb0IeCipGsywAXGauhCm1pB3hUPEo49hfoCwfheLmUiso9HjlDoEkbf5Sc"/>
<p class="font-semibold text-text-primary-light dark:text-text-primary-dark">Ordinary Angels</p>
</div>
</div>
</div>
<div class="px-4 mt-6">
<div class="flex justify-between items-center mb-4">
<h2 class="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">Upcoming Movies</h2>
<a class="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark" href="#">See all</a>
</div>
<div class="grid grid-cols-3 gap-4">
<div>
<img alt="Atlas poster" class="rounded-lg mb-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfsqgtCNng_jHkbhe1CM_rFNwGwMfeMyz49hExUn1M4eCxy9NXvlXieMWuAPPy7e-jfNH8w4bdxm8NRlIUAg95qrjQduQ4EU3NSKsw0BhhZnrw-IfHgAsKylM2y30df2ngqCQ09MDu289SXUvfVRbh_UOn7evbho7L5mGc1BWYUJRA8XAxMbyJ0K1xWYEsoAUeLiRwAL5CRmPlQi7paceql4qeHSiJFy9nIvJqs5MhB6M50rHDz3b-tlANBiLxTGoFfvQpDwdxvbY"/>
<p class="font-semibold text-text-primary-light dark:text-text-primary-dark">Atlas</p>
</div>
<div>
<img alt="The Last Voyage of the Demeter poster" class="rounded-lg mb-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzapdaSxv5t_vvZ7JxUs-xZs_k4MwsPHNKJ4SVMeVtB4EIV0BY9iD6UBGwNttwGwoEMTmptN8-RRHYm5WoKwxpXEKaH_Vi856H9DYZVrFrTbL1ST3J_R6_TyBceuxzw5aPCioDYjquZ3GOvNzz1hxAUmak7Dj-L3xmctFENip4PO-F6OEjU1pwjTRQsgwd9RyWuxgEUP3bxf1_6KQTpL9AjPc1C3PcJeTUEFpokBzAn7A2itEe9k6FYN1QHBOyHvbPzoKb054l1PY"/>
<p class="font-semibold text-text-primary-light dark:text-text-primary-dark">The Last Voyage</p>
</div>
<div>
<img alt="The Last Voyage of the Demeter poster" class="rounded-lg mb-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdxAORGX66xSeWduqPvcU4GN7H_ektuGz-lRa4kRFIE8K4qPEF6mbGOgmInF5v7MaX2MR80fPLhR_wHaOX6wurkfL1YeaYhUVhOkcdpAqr_Kplq_595K_0qOEjnQln6UguUYD6QhTczc2RlkETFxrIJEdOAZPiFt8OI-yKEhKzmCYDeEYGpq-LnIs_gTZLVQe-vV3RRnu6KVIQsB2f4swhJp1hT4zW89F-CT3bCjA3MtQXlAPh620o-N-NZpdfRhLJt5v9i2havPE"/>
<p class="font-semibold text-text-primary-light dark:text-text-primary-dark">Damsel</p>
</div>
</div>
</div>
</main>
<footer class="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md">
<div class="bg-surface-light dark:bg-surface-dark rounded-full shadow-lg px-8 py-3">
<div class="flex justify-around items-center">
<a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">
<span class="material-icons">explore</span>
</a>
<a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">
<span class="material-icons">favorite_border</span>
</a>
<a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">
<span class="material-icons">shopping_cart</span>
</a>
<a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">
<span class="material-icons">person_outline</span>
</a>
</div>
</div>
</footer>
</div>

</body></html>
```

---

### **3. Movie Detail Screen Component**

**Gemini Instructions:**
*   **Source:** The HTML provided below.
*   **Implementation:**
    *   Use an `<ImageBackground>` component for the large movie poster at the top.
    *   The movie details will be within a `<ScrollView>` styled to look like a sheet sliding up from the bottom, overlapping the image.
    *   Use `<Text>` for the movie title, summary, year, and runtime.
    *   **Genre Tags:** Create a horizontal `<View>` containing multiple styled `<Text>` components inside smaller container views.
    *   **Cast List:** Implement as a horizontal `<FlatList>` of circular `<Image>` components with `<Text>` for actor names below.
    *   **Buy Ticket Button:** A `<TouchableOpacity>` that navigates to the `Seat Selection Screen`.

**Provided Code:**

```html
<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Movie Ticket Booking App</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#22C55E",
            "background-light": "#FFFFFF",
            "background-dark": "#1F2937",
            "surface-light": "#F3F4F6",
            "surface-dark": "#374151",
            "text-primary-light": "#1F2937",
            "text-primary-dark": "#FFFFFF",
            "text-secondary-light": "#6B7280",
            "text-secondary-dark": "#9CA3AF",
            "text-tertiary-light": "#9CA3AF",
            "text-tertiary-dark": "#6B7280"
          },
          fontFamily: {
            display: ["Inter", "sans-serif"],
          },
          borderRadius: {
            DEFAULT: "8px",
          },
        },
      },
    };
  </script>
<style>
    body {
      font-family: 'Inter', sans-serif;
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark">
<div class="relative min-h-screen">
<div class="h-96">
<img alt="The Gorge movie poster" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxgGr79oJv3fZM3usrzfjtIaLs5wfFpvkCq5pGek2HvIyz4807LEpdHguGdN19drUv08etcxj2x-0L7fWxVBE411o2bt7teotvlx0HqsXW7VJWZ33jjTk_AzshpH6yy86jsfwwK1WyoU81w9GT3dPWr0_17xjOSLqfhmPoL_NC_wgK9Ovy2_Fb6nspeqhTnDaOJdDVAJOkHgHRF828IPHBVZ5gJeg9EW4POeIHNfx70hHApDtDxGVu5MwZybt62p8wPVm2hgMcd-MT"/>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
</div>
<header class="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
<button class="text-white">
<span class="material-icons">arrow_back</span>
</button>
<div class="flex items-center space-x-1 text-white">
<span class="material-icons text-3xl">apple</span>
<span class="font-bold text-xl">tv+</span>
</div>
</header>
<div class="absolute bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark rounded-t-3xl p-6 pt-4 transform translate-y-[-2rem]">
<div class="flex justify-between items-center mb-4">
<h1 class="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">The Gorge</h1>
<div class="flex space-x-4 text-text-secondary-light dark:text-text-secondary-dark">
<button>
<span class="material-icons">bookmark_border</span>
</button>
<button>
<span class="material-icons">share</span>
</button>
</div>
</div>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">Adventure</span>
<span class="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">Action</span>
<span class="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">Romance</span>
<span class="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">Horror</span>
<span class="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">Drama</span>
</div>
<div class="flex justify-between items-center mb-4 text-text-secondary-light dark:text-text-secondary-dark">
<span class="text-sm font-medium">2025 · 1h 55m</span>
<span class="text-sm font-bold">IMDb 6</span>
</div>
<div class="mb-6">
<h2 class="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-1">Summery</h2>
<p class="text-text-secondary-light dark:text-text-secondary-dark text-sm">Two operatives are appointed to posts in guard towers on opposite sides of a classified gorge.</p>
</div>
<div class="mb-8">
<h2 class="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">Casts</h2>
<div class="flex space-x-4">
<div class="text-center">
<img alt="Miles Teller photo" class="w-14 h-14 rounded-full object-cover mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4f2hqhUR7VyA3o2bi_fgrhRL0VYW9F0fPAS3nWiCyc7AHHA3vPlBJBRd6hHpMRcx4RKpy_f-eN_G7yMnUYyzh76WfaZQXEisUOBxp1rpcdABJ0U33UCC6GH3a0wCcQDLs7WQfyey8Iq0xkyoHKJx1jNiJ-z-xztYiItkWbv4VmHZG8FnPSUwa79LfgP-9ugpdvUdzNJnHXd-Zfgt3mE3qgVipzSqjrfe_gASLoVoyxcExlnzkC2D2feVaRDOmWbOBilDZ2zH70Hs6"/>
<span class="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1 block">Miles Teller</span>
</div>
<div class="text-center">
<img alt="Anya Taylor-Joy photo" class="w-14 h-14 rounded-full object-cover mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4f2hqhUR7VyA3o2bi_fgrhRL0VYW9F0fPAS3nWiCyc7AHHA3vPlBJBRd6hHpMRcx4RKpy_f-eN_G7yMnUYyzh76WfaZQXEisUOBxp1rpcdABJ0U33UCC6GH3a0wCcQDLs7WQfyey8Iq0xkyoHKJx1jNiJ-z-xztYiItkWbv4VmHZG8FnPSUwa79LfgP-9ugpdvUdzNJnHXd-Zfgt3mE3qgVipzSqjrfe_gASLoVoyxcExlnzkC2D2feVaRDOmWbOBilDZ2zH70Hs6"/>
<span class="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1 block">Anya Taylor-Joy</span>
</div>
<div class="text-center">
<img alt="Sigourney Weaver photo" class="w-14 h-14 rounded-full object-cover mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4f2hqhUR7VyA3o2bi_fgrhRL0VYW9F0fPAS3nWiCyc7AHHA3vPlBJBRd6hHpMRcx4RKpy_f-eN_G7yMnUYyzh76WfaZQXEisUOBxp1rpcdABJ0U33UCC6GH3a0wCcQDLs7WQfyey8Iq0xkyoHKJx1jNiJ-z-xztYiItkWbv4VmHZG8FnPSUwa79LfgP-9ugpdvUdzNJnHXd-Zfgt3mE3qgVipzSqjrfe_gASLoVoyxcExlnzkC2D2feVaRDOmWbOBilDZ2zH70Hs6"/>
<span class="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1 block">Sigourney Weaver</span>
</div>
<div class="text-center">
<img alt="Sope Dirisu photo" class="w-14 h-14 rounded-full object-cover mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx7sb3XnjEAvHf3K8fEZYgtxK4YuJDMJ1XWzD4pfcMsR3Uq-xZHaipSKxuhbMaBfVpBNYTEo9rn19duKwv_RCX4JuUmpkiz9cc36qtcKCuhNfq6BK3aEva7Y4GfDhhdwo0CowXylzjq2B-WLNnQzusjxp9ZYpanOcm-JTyPraEn3CYw_lp-0Pbg-wMAdJ7MvxB_z4vdJ7bSEzaScyzzay9K54GTbwsFvkuhqE4ipRP-SDk126ZxHvEwBlzpCi1phTnatNPjn958s75"/>
<span class="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1 block">Sope Dirisu</span>
</div>
</div>
</div>
<button class="w-full bg-primary text-background-dark font-bold py-4 rounded-lg text-lg">
            Buy Ticket
        </button>
</div>
</div>

</body></html>
```

---

### **4. Seat Selection Screen Component**

**Gemini Instructions:**
*   **Source:** The HTML provided below.
*   **Implementation:**
    *   **Date & Time Pickers:** Use two separate horizontal `<FlatList>` components. Manage state to apply different styles to the selected date and time.
    *   **Screen Graphic:** Create the curved "SCREEN" graphic using a custom styled `<View>` or an SVG component.
    *   **Seat Grid:** This is the most complex component. Use a `<FlatList>` with `numColumns={8}`. Each seat must be a stateful `TouchableOpacity`. Its style (e.g., backgroundColor) must change based on its status (`available`, `selected`, `unavailable`). A function will handle the selection logic and update the total price.
    *   **Footer:** A `<View>` fixed at the bottom of the screen. It will display the total price and the number of seats selected, which should be derived from the component's state. The "DOWNLOAD TICKET" button will be a `<TouchableOpacity>` that navigates to the `Checkout Confirmation Screen`.

**Provided Code:**

```html
<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Seat Selection</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#22C55E",
            "background-light": "#F9FAFB",
            "background-dark": "#111827",
            "surface-light": "#FFFFFF",
            "surface-dark": "#1F2937",
            "text-primary-light": "#1F2937",
            "text-primary-dark": "#FFFFFF",
            "text-secondary-light": "#6B7280",
            "text-secondary-dark": "#9CA3AF",
            "selected-light": "#3B82F6",
            "selected-dark": "#3B82F6",
            "available-light": "#E5E7EB",
            "available-dark": "#4B5563",
            "unavailable-light": "#D1D5DB",
            "unavailable-dark": "#374151",
          },
          fontFamily: {
            display: ["Inter", "sans-serif"],
          },
          borderRadius: {
            DEFAULT: "8px",
          },
        },
      },
    };
  </script>
<style>
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    body {
      height: 100dvh;
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display">
<div class="flex flex-col h-full" id="root">
<header class="flex items-center p-4 bg-surface-light dark:bg-surface-dark shadow-md dark:shadow-none">
<button class="text-text-primary-light dark:text-text-primary-dark">
<span class="material-icons">arrow_back</span>
</button>
<h1 class="flex-grow text-xl font-bold text-center text-text-primary-light dark:text-text-primary-dark">Selected Seats</h1>
<div class="w-10"></div>
</header>
<main class="flex-grow p-4 flex flex-col">
<div class="mb-4">
<div class="flex justify-between space-x-2 overflow-x-auto no-scrollbar">
<div class="text-center shrink-0">
<div class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Sun</div>
<div class="mt-1 px-4 py-2 rounded-lg text-text-primary-light dark:text-text-primary-dark bg-surface-light dark:bg-surface-dark">07 Sep</div>
</div>
<div class="text-center shrink-0">
<div class="text-sm font-medium text-orange-500">Mon</div>
<div class="mt-1 px-4 py-2 rounded-lg bg-orange-500 text-white">08 Sep</div>
</div>
<div class="text-center shrink-0">
<div class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Tue</div>
<div class="mt-1 px-4 py-2 rounded-lg text-text-primary-light dark:text-text-primary-dark bg-surface-light dark:bg-surface-dark">09 Sep</div>
</div>
<div class="text-center shrink-0">
<div class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Wed</div>
<div class="mt-1 px-4 py-2 rounded-lg text-text-primary-light dark:text-text-primary-dark bg-surface-light dark:bg-surface-dark">10 Sep</div>
</div>
<div class="text-center shrink-0">
<div class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Thu</div>
<div class="mt-1 px-4 py-2 rounded-lg text-text-primary-light dark:text-text-primary-dark bg-surface-light dark:bg-surface-dark">11 Sep</div>
</div>
</div>
</div>
<div class="mb-4">
<div class="flex justify-between space-x-2 overflow-x-auto no-scrollbar">
<div class="px-3 py-1.5 rounded-lg text-text-primary-light dark:text-text-primary-dark bg-surface-light dark:bg-surface-dark text-sm">06:00 AM</div>
<div class="px-3 py-1.5 rounded-lg text-text-primary-light dark:text-text-primary-dark bg-surface-light dark:bg-surface-dark text-sm">08:00 AM</div>
<div class="px-3 py-1.5 rounded-lg text-text-primary-light dark:text-text-primary-dark bg-surface-light dark:bg-surface-dark text-sm">10:00 AM</div>
<div class="px-3 py-1.5 rounded-lg bg-yellow-400 text-black text-sm">12:00 PM</div>
<div class="px-3 py-1.5 rounded-lg text-text-primary-light dark:text-text-primary-dark bg-surface-light dark:bg-surface-dark text-sm">02:00 PM</div>
</div>
</div>
<div class="flex flex-col items-center">
<div class="relative w-full max-w-sm mb-4">
<div class="h-1 bg-green-400 rounded-full" style="clip-path: ellipse(50% 100% at 50% 0%);"></div>
<p class="text-center text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">SCREEN</p>
</div>
<div class="grid grid-cols-8 gap-3">
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-available-light dark:bg-available-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-selected-light dark:bg-selected-dark flex items-center justify-center text-white text-xs font-bold">B2</div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-available-light dark:bg-available-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-selected-light dark:bg-selected-dark flex items-center justify-center text-white text-xs font-bold">C2</div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-available-light dark:bg-available-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-selected-light dark:bg-selected-dark flex items-center justify-center text-white text-xs font-bold">D4</div>
<div class="w-7 h-7 rounded bg-available-light dark:bg-available-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-available-light dark:bg-available-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-selected-light dark:bg-selected-dark flex items-center justify-center text-white text-xs font-bold">E2</div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-selected-light dark:bg-selected-dark flex items-center justify-center text-white text-xs font-bold">E7</div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-available-light dark:bg-available-dark"></div>
<div class="w-7 h-7 rounded bg-available-light dark:bg-available-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-selected-light dark:bg-selected-dark flex items-center justify-center text-white text-xs font-bold">F7</div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-selected-light dark:bg-selected-dark flex items-center justify-center text-white text-xs font-bold">G3</div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
<div class="w-7 h-7 rounded bg-unavailable-light dark:bg-unavailable-dark"></div>
</div>
<div class="flex justify-center space-x-6 mt-4 mb-4">
<div class="flex items-center space-x-2">
<div class="w-4 h-4 rounded-sm bg-available-light dark:bg-available-dark"></div>
<span class="text-xs text-text-secondary-light dark:text-text-secondary-dark">Available</span>
</div>
<div class="flex items-center space-x-2">
<div class="w-4 h-4 rounded-sm bg-selected-light dark:bg-selected-dark"></div>
<span class="text-xs text-text-secondary-light dark:text-text-secondary-dark">Selected</span>
</div>
<div class="flex items-center space-x-2">
<div class="w-4 h-4 rounded-sm bg-unavailable-light dark:bg-unavailable-dark"></div>
<span class="text-xs text-text-secondary-light dark:text-text-secondary-dark">Unavailable</span>
</div>
</div>
</div>
<div class="pt-2">
<h2 class="text-base font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">Selected Seats</h2>
<div class="grid grid-cols-2 grid-rows-4 grid-flow-col gap-x-4 gap-y-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
<p>Seat B2</p>
<p>Seat C2</p>
<p>Seat D4</p>
<p>Seat E2</p>
<p>Seat E7</p>
<p>Seat F7</p>
<p>Seat G3</p>
</div>
</div>
</main>
<footer class="p-4 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 mt-auto">
<div class="flex items-center justify-between">
<div>
<p class="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">$840.0</p>
<p class="text-xs text-text-secondary-light dark:text-text-secondary-dark">7 Seat Selected</p>
</div>
<button class="bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow-lg text-sm">
          DOWNLOAD TICKET
        </button>
</div>
</footer>
</div>

</body></html>
```

---

### **5. Checkout Confirmation Screen Component**

**Gemini Instructions:**
*   **Source:** The HTML provided below.
*   **Implementation:**
    *   Use `<SafeAreaView>` and `<ScrollView>` for the base structure with a dark background (`#111811`).
    *   **Header:** A simple header with a close icon (`<TouchableOpacity>`) and a title.
    *   **Order Summary:** Use a series of styled `<View>` components to list the order details (Cinema, Date, Seats, Payment Method). Each `<View>` should contain an icon (use SVG components for this) and `<Text>` elements.
    *   **Button:** The "View Tickets" button should be a prominent `<TouchableOpacity>`.
    *   **Bottom Tab Bar:** Implement the same reusable bottom navigation component from the Home Screen, allowing the user to navigate back to the main sections of the app.

**Provided Code:**

```html
<html>
  <head>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
    <link
      rel="stylesheet"
      as="style"
      onload="this.rel='stylesheet'"
      href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Space+Grotesk%3Awght%40400%3B500%3B700"
    />

    <title>Stitch Design</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  </head>
  <body>
    <div
      class="relative flex h-auto min-h-screen w-full flex-col bg-[#111811] dark justify-between group/design-root overflow-x-hidden"
      style='font-family: "Space Grotesk", "Noto Sans", sans-serif;'
    >
      <div>
        <div class="flex items-center bg-[#111811] p-4 pb-2 justify-between">
          <div class="text-white flex size-12 shrink-0 items-center" data-icon="X" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
              ></path>
            </svg>
          </div>
          <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Order Confirmation</h2>
        </div>
        <div class="@container">
          <div class="@[480px]:px-4 @[480px]:py-3">
            <div
              class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#111811] @[480px]:rounded-lg min-h-[218px]"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfF-Ssw0eddkt3JzmBfadNCYkdGhoNe0TsBfAyQQN_idAnt0s3MnpTzjJlBON_1E8f1bYCCpvVznHfgJHMEJjCwPxzalZnv9YijYTh3TGmWN8032bbuNd3nfG-raZ1MoPveaCR2u0olmwAlRbqxej4BimvVCbPczFktj0V2bLQpVPLPK67-sQALPhSmhhbCnJxHuPqlkoEMdiat_B2VFYGvTNJUohzZeNRV0B3n-p4_6Y5PvtyNBOrQFH3-ulhLqkxSYjwzdFOQg");'
            ></div>
          </div>
        </div>
        <h1 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">Payment Successful</h1>
        <p class="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Your tickets are confirmed and will be sent to your email address. Get ready for an unforgettable experience!
        </p>
        <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Order Details</h2>
        <div class="flex items-center gap-4 bg-[#111811] px-4 min-h-[72px] py-2">
          <div class="text-white flex items-center justify-center rounded-lg bg-[#293829] shrink-0 size-12" data-icon="FilmSlate" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col justify-center">
            <p class="text-white text-base font-medium leading-normal line-clamp-1">The Grand Cinema</p>
            <p class="text-[#9db89d] text-sm font-normal leading-normal line-clamp-2">2 Tickets</p>
          </div>
        </div>
        <div class="flex items-center gap-4 bg-[#111811] px-4 min-h-[72px] py-2">
          <div class="text-white flex items-center justify-center rounded-lg bg-[#293829] shrink-0 size-12" data-icon="Calendar" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col justify-center">
            <p class="text-white text-base font-medium leading-normal line-clamp-1">Movie Night</p>
            <p class="text-[#9db89d] text-sm font-normal leading-normal line-clamp-2">Saturday, July 20, 2024, 7:30 PM</p>
          </div>
        </div>
        <div class="flex items-center gap-4 bg-[#111811] px-4 min-h-[72px] py-2">
          <div class="text-white flex items-center justify-center rounded-lg bg-[#293829] shrink-0 size-12" data-icon="Armchair" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M216,88.8V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72V88.8a40,40,0,0,0,0,78.4V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V167.2a40,40,0,0,0,0-78.4ZM80,48h96a24,24,0,0,1,24,24V88.8A40.07,40.07,0,0,0,168,128H88A40.07,40.07,0,0,0,56,88.8V72A24,24,0,0,1,80,48ZM208.39,152H208a8,8,0,0,0-8,8v40H56V160a8,8,0,0,0-8-8h-.39A24,24,0,1,1,72,128v40a8,8,0,0,0,16,0V144h80v24a8,8,0,0,0,16,0V128a24,24,0,1,1,24.39,24Z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col justify-center">
            <p class="text-white text-base font-medium leading-normal line-clamp-1">Seat Selection</p>
            <p class="text-[#9db89d] text-sm font-normal leading-normal line-clamp-2">Row G, Seats 12 &amp; 13</p>
          </div>
        </div>
        <div class="flex items-center gap-4 bg-[#111811] px-4 min-h-[72px] py-2">
          <div class="text-white flex items-center justify-center rounded-lg bg-[#293829] shrink-0 size-12" data-icon="CreditCard" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col justify-center">
            <p class="text-white text-base font-medium leading-normal line-clamp-1">Payment Method</p>
            <p class="text-[#9db89d] text-sm font-normal leading-normal line-clamp-2">Credit Card ending in 4567</p>
          </div>
        </div>
      </div>
      <div>
        <div class="flex px-4 py-3">
          <button
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#2aea2a] text-[#111811] text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span class="truncate">View Tickets</span>
          </button>
        </div>
        <div class="flex gap-2 border-t border-[#293829] bg-[#1c261c] px-4 pb-3 pt-2">
          <a class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9db89d]" href="#">
            <div class="text-[#9db89d] flex h-8 items-center justify-center" data-icon="House" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
                ></path>
              </svg>
            </div>
            <p class="text-[#9db89d] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </a>
          <a class="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-white" href="#">
            <div class="text-white flex h-8 items-center justify-center" data-icon="FilmSlate" data-size="24px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM136.44,54.72,164.57,71l-58.9,15.55L77.55,70.27ZM208,200H48V120H208v80Z"
                ></path>
              </svg>
            </div>
            <p class="text-white text-xs font-medium leading-normal tracking-[0.015em]">Tickets</p>
          </a>
          <a class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9db89d]" href="#">
            <div class="text-[#9db89d] flex h-8 items-center justify-center" data-icon="User" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                ></path>
              </svg>
            </div>
            <p class="text-[#9db89d] text-xs font-medium leading-normal tracking-[0.015em]">Profile</p>
          </a>
          <a class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9db89d]" href="#">
            <div class="text-[#9db89d] flex h-8 items-center justify-center" data-icon="Gear" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"
                ></path>
              </svg>
            </div>
            <p class="text-[#9db89d] text-xs font-medium leading-normal tracking-[0.015em]">Settings</p>
          </a>
        </div>
        <div class="h-5 bg-[#1c261c]"></div>
      </div>
    </div>
  </body>
</html>```