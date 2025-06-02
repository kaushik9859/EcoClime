import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com/" 
          crossOrigin="" 
        />
        <link
          rel="stylesheet"
          as="style"
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Space+Grotesk:wght@400;500;700"
        />
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      </Head>

      <div className="relative flex min-h-screen flex-col bg-[#111418] justify-between overflow-x-hidden group/design-root"
        style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
        
        {/* Main Content */}
        <div>
          {/* Header */}
          <div className="flex items-center bg-[#111418] p-4 pb-2 justify-between">
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
              EcoClime
            </h2>
            <div className="flex w-12 items-center justify-end">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Farm Overview */}
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Farm Overview
          </h2>
          
          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#9cabba] text-sm font-normal leading-normal">Soil Moisture</p>
                <p className="text-white text-base font-bold leading-tight">22%</p>
                <p className="text-[#9cabba] text-sm font-normal leading-normal">Optimal range: 15-25%</p>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBluAuHK9ZlofB7CoOwS9X6w_oIzkpDF6OFqdcHB7wwS6h2T7YTniPXxCvbXcH5tfq_FbocPbQjGksH8l8oW45lpsMe8LI9QaIV3g-J5dJzg3qWquemWrMGeLYgY5tqcoBVt-62eIGn38xC1YljkmWOD96Y8Z8U9nsUZgZn-v_RxJphaJ7wxYHc1YifJRPKAivXW3IVIxGSB7rxZaHSQmFjalzkWP0ZoJiRk9hD3B6utC_N6X98g-0dqN4PMB5xXfepgbHGXAXhZ4P9"
                alt="Soil Moisture"
                className="w-full aspect-video rounded-xl flex-1 object-cover"
              />
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#9cabba] text-sm font-normal leading-normal">Soil Temperature</p>
                <p className="text-white text-base font-bold leading-tight">28°C</p>
                <p className="text-[#9cabba] text-sm font-normal leading-normal">Optimal range: 20-30°C</p>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFzBrGKzygC0saCyCL-P5ZcdBZbbY350dT35EhzTrL5VZiHigIT84OeGUXY0MtgYSjXw5I4AtO3pZbHzJnWOndOslOfnZh5RzyHz419MhAAqeJL12qNuUR5W3zNzz28pVdMZ3fonBVo5SZTCgUlhRH1QVi7vgMM1xchB3-jm-p2196EiJ5AtrR4qwRyIEB6lTBEQ1-zJZp87TFP2sjKDEwAeofRbQ4KK_KyB50nPPSlKCVxbC3oKVWiFIvrqzMbChjI1sggueIgbkr"
                alt="Soil Temperature"
                className="w-full aspect-video rounded-xl flex-1 object-cover"
              />
            </div>
          </div>

          {/* Crop Health */}
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Crop Health
          </h2>
          <div className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjjKaBKceyJmLIqb-S2CnEX5SF7Cl0QJAkXx6aBglXnTBIBLewSMiXXrybCtsvMfnyet1zAE_vPt-Ks4S1D9hu1gpT2pLMBzm62GIR_tGWiPIYErrtEsCVVAqUAfVoF2ArIukkjZSRWg3Zfss8bJVT9t4svdI0X8uYR83VWpkXQvqib8Tjib3CctKS70Y9ixqwP6SnkBhL27Tsr9A_HN3c6UiwSblmICohn_D5RmxX-fvIIT2R-iKA7ufAzNdS0FmbDC0gZCrzNChg"
                alt="NDVI Health Map"
                className="w-full aspect-video rounded-xl object-cover"
              />
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">NDVI Health Map</p>
                <div className="flex items-end gap-3 justify-between">
                  <p className="text-[#9cabba] text-base font-normal leading-normal">Visual representation of crop health</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Forecast */}
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            7-Day Weather Forecast
          </h2>
          <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch p-4 gap-3">
              {[
                { temp: "28°C", day: "Mon", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL6Teb-FtRwbrdYKdmdgkwl0c9lmvahaQUu9V2MeBpv-CEG_2fVXb4rbXiGk-Phl2RPrfq6ZAijimREPFa86HqC54osiBMfBhbBVejzesMK-7GCb23l-DW77I5R5xS0fLnmqq1aQ7xW5RNdQQSfAsbFUAptuc1u3b7ZoxzzbhqEjJW_XMYcZ41gx4YYM5BHZ9FLjgzZaNJuaaiCtoqDVFHUVzsMsLVegbw4CsZ5cFjliacgPKRP1y-yQOU8ym729JMos6KWJp9fDVa" },
                { temp: "26°C", day: "Tue", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnWeXwO_PclTqpDs6_Z-mEUkWZMCs0EZxxGroUhZmHD2delTkU1COKmNbsllN2ROCOi48lsmY1hVjqk4F9cl1Qzhs901veFhjjvu-ef2sW3TQE0OblaXj1ZyYMtWRdJryfuNckQh3wmZq_m3NA1FMp_ieQlIskc_VQ3JWe7Jy5CBK6dqU223kZNIqiUZKGwnopDQzjH0DGd88dmzLrAEYWW1UcxIpMaDLl0ekz12LqzUU11Q_Blm0Z3GdnvgQQylHLaIKoVbMNHWpc" },
                { temp: "24°C", day: "Wed", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwizwb0izLosGla7fiGJHk8uaHN40jXUpBODbk8Eg8n-PH7bUat0gJe_pF2cZ1sc0DBAE4a1Aj2eEy-w82r3CLopCQ1fPR5y6-wQk4C-pQd0etkewrru-Ug6UdL68dcdUWFtlcHK1gOyXPDZnvdJ-ircNcb7pxKR5c1R9XqDirZM8vwVdZJ8YcctDU-Nwu8cmKPmECJNBLW6jaHTKj9x6_tsxI-zdq6FMXRMYCAHT2Mr5EMm-KD8f2wpnuQTrCcTNgbMVoxdnBjpQP" },
                { temp: "29°C", day: "Thu", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT282R4Q4OmJHujDzndWilYCEw4FEiMqOOoVk4HqguJl_t_EWKwCJ-N_nm6qvfDQdO6B-aqSf3_H2w7DCspPUTSMqcYTa2tVaYLBiTuT4QjQIjB8rgjp8MtKr3clqXgf_msGRT8M74oX1HK4Z8l_9u4lMDlr-q5eMmCZyG43UgbG3GMl_D38xS6yoG20Jy8bzFmgISQZBCZAmEYBcriwBToZNRYYWHnU8hENoWuDd3EirSXSyUpwPDECOmFT2av0lJXHvCrK7kClpD" },
                { temp: "27°C", day: "Fri", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA2FKEu2ZsfaRMAfuq4zwDtwcmpgCSu74j3CKkUCtid2XKNDZ32jesyz_2uc_--lVM5RfnZJHQkLq0vXv9oFiDNLf7emRngpiR1_hZ_PqqMPIbx-RyHE-skyX4wpXLthgCdOe6-oAXvt_xIUUxCTK52L7i_KQzLKKAZ74H-UQDehV8sViUXbebluuzMYdJfHrtYh31-77QD204t8SjKh3zZA4e3lX5dmO18uSeL0QH9BKrfLfo4aQmrbrEfCfm4k3tiuw41y7fc0Um" },
                { temp: "25°C", day: "Sat", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwhgpou-QdwcvL_Evq1GAqyuvcCXb8RqcmtKWD3sN7uWIFRanfzNwhuOuSF5G2dQ8U_Dzkhiw9TIBDR-JOVNTzZDY3eavTtzSYwgMOSvWGHgU1GR0ZSh8P32KxjyCQN5bt8Ug4iLPQTHWwby3sstoGzYEwFpEUt_OIs-4TXRMSQ3CqhVkPL5UQoiQ5V5xeMEhwUyNFO3yMBPNH_ZTA_uxJWFUxwm4ZlqQd7souqruYDGrDyHJcZ3mFmmjm-7_QZxNQXwhVsxer5aTg" },
                { temp: "30°C", day: "Sun", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7e6E42Gfn4IrVJcpbeKUzSeZ4QAVPqBJTwencDUQrfbblr2gRMDCGd-VvinRx1IQikbglyExIB_gL4CpifFpnORYGgj4EWLkmxiQfzlj5r9_0-kBNN4Aaw8H4tqwtvnc1TxeJrlZKfk0x4rfiQSkrX3solTTrVFoeMW3rJRFWn61-nD24gM92ncttQ6K_9vAWJlxI13RP4zyPsYzadOd2qDB2loAUBT2X4sAK_EzU5G03nElL9XwQWtQpH2KsnpU3E09zk25F-CKW" }
              ].map((item, index) => (
                <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <img
                    src={item.img}
                    alt={`Weather ${item.day}`}
                    className="w-full aspect-square rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-white text-base font-medium leading-normal">{item.temp}</p>
                    <p className="text-[#9cabba] text-sm font-normal leading-normal">{item.day}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Irrigation */}
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Irrigation Recommendations
          </h2>
          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-white text-base font-bold leading-tight">Irrigation Needed</p>
                <p className="text-[#9cabba] text-sm font-normal leading-normal">Based on current soil conditions and weather forecast</p>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRf3tHsLyxNTxbYSedHe8Hp9imgWQZ2eDpv8seGEksALb4b6Bw_c3JAqN9Kr1UOq5D2UPoQG91L7CWllQdgaJrvRnCRRjU4irE9eA8lgHhgTLm-of-cza87hzfohHUDa4G4OHLRKrUnj0xapdIDQAn1T0M2Z3i4lrKsJHbWkiinSchkConVytazIGnxgtBZDO6vHOEihm7CBeIeT6RBkVyYbHGNhsW3x4AmdkQG6R9LiZcCsJsekp9Pn9JhN9-90d_GcJ8Vgr5Qcpa"
                alt="Irrigation Recommendation"
                className="w-full aspect-video rounded-xl flex-1 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div>
          <div className="flex gap-2 border-t border-[#283039] bg-[#1b2127] px-4 pb-3 pt-2">
            {[
              { 
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path></svg>,
                label: "Dashboard",
                active: true
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path></svg>,
                label: "Insights",
                active: false
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56,3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path></svg>,
                label: "Settings",
                active: false
              }
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex flex-1 flex-col items-center justify-end gap-1 rounded-full ${item.active ? 'text-white' : 'text-[#9cabba]'}`}
              >
                <div className={`flex h-8 items-center justify-center ${item.active ? 'text-white' : 'text-[#9cabba]'}`}>
                  {item.icon}
                </div>
                <p className={`text-xs font-medium leading-normal tracking-[0.015em] ${item.active ? 'text-white' : 'text-[#9cabba]'}`}>
                  {item.label}
                </p>
              </a>
            ))}
          </div>
          <div className="h-5 bg-[#1b2127]"></div>
        </div>
      </div>
    </>
  );
}