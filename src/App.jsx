import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Award, 
  CheckCircle, 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube,
  GraduationCap,
  Briefcase,
  DollarSign,
  Heart
} from 'lucide-react';
import { SpeedInsights } from "@vercel/speed-insights/next"

// --- Components ---

const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`}>
    {children}
  </span>
);

const SectionTitle = ({ title, subtitle, center = true }) => (
  <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">{title}</h2>
    {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    <div className={`h-1 w-24 bg-emerald-600 mt-4 ${center ? 'mx-auto' : ''}`}></div>
  </div>
);

const Card = ({ icon: Icon, title, desc, delay }) => (
  <div 
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
  >
    <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
      <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

// --- Data ---

const ukmData = [
  { id: 1, name: "BEM", desc: "Badan Eksekutif Mahasiswa. Wadah kepemimpinan dan aspirasi mahasiswa.", img: "https://files.catbox.moe/f7mgks.jpg" },
  { id: 2, name: "Lembaga Pers Mahasiswa", desc: "Kembangkan bakat jurnalistik, fotografi, dan penulisan kreatif.", img: "https://files.catbox.moe/xrygch.jpg" },
  { id: 3, name: "MAPALA KOMPAS", desc: "Mahasiswa Pecinta Alam. Menjelajah dan menjaga kelestarian lingkungan.", img: "https://files.catbox.moe/j1eswj.jpg" },
  { id: 4, name: "UKM Tari", desc: "Melestarikan budaya tradisional melalui seni tari yang indah.", img: "https://files.catbox.moe/ik5kwb.jpg" },
  { id: 5, name: "UKM Olahraga", desc: "Futsal, Voli, Badminton. Sehat jasmani, berprestasi di lapangan.", img: "https://files.catbox.moe/utm39z.jpg" },
  { id: 6, name: "Pecinta Buku", desc: "Komunitas pecinta buku dan diskusi intelektual.", img: "https://files.catbox.moe/hax7ix.jpg" },
  { id: 7, name: "BGSM", desc: "Bujang Gadis STKIP Muhammadiyah Pagar Alam, Icon Kampus.", img: "https://files.catbox.moe/mk9smk.jpg" },
  { id: 8, name: "SIBELATIS", desc: "Seni Bela Diri Gabungan.", img: "https://files.catbox.moe/8xutpg.jpg" },
];

const alumniData = [
  { name: "Tomy Heryandi, S.Pd.", job: "Kepala SD Islam Al-Azhar Cairo Pagar Alam", img: "https://files.catbox.moe/o8wq02.jpg" },
  { name: "Novi Handayani, S.Pd.", job: "Kepala SD IT Persatuan Islam Pagar Alam", img: "https://files.catbox.moe/kckd2k.jpg" },
  { name: "Agung Rego, S.Pd.", job: "Kepala SMP PGRI Pagar Alam", img: "https://files.catbox.moe/hz7wdf.jpg" },
  { name: "Dewi Martha, S.Pd.Gr.", job: "Kepala SMP Islam Al-Azhar Cairo Pagar Alam", img: "https://files.catbox.moe/0nq4sc.jpg" },
  { name: "Dery Herdiansyah, S.Pd.", job: "Brimob Porli", img: "https://files.catbox.moe/69y2rk.jpg" },
  { name: "Lusia Ayu Andini, S.Pd.Gr.", job: "ASN PPPK, Bendahara STKIP Muhammadiyah Pagar Alam", img: "https://files.catbox.moe/lq9om6.jpg" },
  { name: "Era Listiani, S.Pd.Gr.", job: "ASN PPPK SMK Negeri 2 Pagar Alam", img: "https://files.catbox.moe/coxpjf.jpg" },
  { name: "Hikmawati Nasution, S.Pd.", job: "Pegawai Bank Sumsel Babel", img: "https://files.catbox.moe/sci930.jpg" },
  { name: "Zerra Novalina, S.Pd.", job: "Pegawai BANK BRI", img: "https://files.catbox.moe/pwkh2c.jpg" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProdi, setActiveProdi] = useState('matematika');
  const [selectedUKM, setSelectedUKM] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
        <img 
          src="https://files.catbox.moe/1cde7a.png" 
          alt="Logo STKIP Muhammadiyah" 
          className="w-full h-full object-contain"
          />
              
            </div>
            <div className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white md:text-white text-emerald-900'} leading-tight`}>
              STKIP Muhammadiyah<br/>
              <span className="text-sm font-normal opacity-90">Kota Pagar Alam</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Beranda', 'Prodi', 'Beasiswa', 'Daftar'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium hover:text-yellow-400 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollToSection('daftar')} className="bg-yellow-400 text-emerald-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg">
              Daftar Sekarang
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-emerald-600 bg-white p-2 rounded-lg shadow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
            <div className="flex flex-col p-4 space-y-4">
              {['Beranda', 'Prodi', 'Beasiswa', 'Daftar'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left font-medium text-gray-700 py-2 border-b border-gray-100"
                >
                  {item}
                </button>
              ))}
              <button onClick={() => scrollToSection('daftar')} className="bg-emerald-600 text-white py-3 rounded-lg font-bold w-full">
                Daftar Sekarang
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="beranda" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.catbox.moe/iiymco.jpg" 
            alt="Mahasiswa STKIP" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-16">
          <div className="animate-fade-in-up">
            <Badge className="bg-yellow-400 text-emerald-900 mb-6 font-bold text-sm md:text-base">
              🎓 TA 2026/2027 Telah Dibuka!
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Menuju Universitas Terbesar<br/>
              <span className="text-yellow-400">di Kota Pagar Alam</span>
            </h1>
            <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan STKIP Muhammadiyah Pagar Alam. Kampus pendidikan unggulan yang mencetak generasi perubahan berlandaskan nilai Islami.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button onClick={() => scrollToSection('daftar')} className="w-full md:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold text-lg transition transform hover:-translate-y-1 shadow-xl border-2 border-emerald-500">
                Daftar Sekarang
              </button>
              <button onClick={() => scrollToSection('beasiswa')} className="w-full md:w-auto px-8 py-4 bg-white text-emerald-800 rounded-full font-bold text-lg transition hover:bg-gray-100 shadow-xl flex items-center justify-center">
                <Trophy className="w-5 h-5 mr-2" />
                Cek Beasiswa
              </button>
            </div>

            <div className="mt-12 bg-white/10 backdrop-blur-md rounded-xl p-4 inline-flex items-center border border-white/20">
              <Award className="text-yellow-400 w-8 h-8 mr-3" />
              <div className="text-left text-white">
                <p className="font-bold text-sm">Promo Spesial</p>
                <p className="text-xs opacity-90">100 Pendaftar Pertama Mendapat Beasiswa Muhammadiyah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Kenapa Pilih Kami?" 
            subtitle="Kami tidak hanya mencetak sarjana, tapi melahirkan pendidik dan pemimpin masa depan." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card 
              icon={GraduationCap} 
              title="Kampus Unggulan" 
              desc="Kurikulum berbasis kompetensi yang relevan dengan kebutuhan pendidikan modern."
            />
            <Card 
              icon={DollarSign} 
              title="Biaya Terjangkau" 
              desc="Biaya kuliah sangat terjangkau mulai dari 200rb-an per bulan. Pendidikan berkualitas untuk semua."
            />
            <Card 
              icon={Briefcase} 
              title="Siap Kerja" 
              desc="Lulusan kami terserap cepat di dunia kerja, baik sebagai ASN, guru swasta, maupun wirausaha."
            />
            <Card 
              icon={Heart} 
              title="Lingkungan Islami" 
              desc="Membangun karakter mahasiswa dengan nilai-nilai Keislaman dan Kemuhammadiyahan."
            />
          </div>
        </div>
      </section>

      {/* PRODI SECTION */}
      <section id="prodi" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Program Studi" subtitle="Pilih jurusan yang sesuai dengan passion dan cita-citamu." />

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row min-h-[400px]">
            {/* Sidebar Tabs */}
            <div className="md:w-1/3 bg-emerald-900 text-white p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <BookOpen className="mr-2" /> Fakultas
              </h3>
              <div className="space-y-2">
                {[
                  { id: 'matematika', label: 'Pendidikan Matematika', icon: '📐' },
                  { id: 'indo', label: 'Pend. Bhs Indonesia', icon: '📕' },
                  { id: 'inggris', label: 'Pend. Bhs Inggris', icon: '🇬🇧' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveProdi(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${activeProdi === tab.id ? 'bg-yellow-400 text-emerald-900 font-bold shadow-lg' : 'hover:bg-emerald-800 text-emerald-100'}`}
                  >
                    <span className="mr-3 text-lg">{tab.icon}</span> {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="md:w-2/3 p-8 md:p-12 bg-white flex items-center">
              {activeProdi === 'matematika' && (
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-bold text-emerald-900 mb-4">Pendidikan Matematika</h3>
                  <p className="text-gray-600 mb-6 text-lg">Mencetak guru matematika yang profesional, inovatif, dan mampu memanfaatkan teknologi dalam pembelajaran.</p>
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-800">Prospek Karir:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {['Guru Profesional', 'Tutor Bimbel', 'Data Analyst', 'Staf Perbankan', 'Edupreneur'].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-600"><CheckCircle size={16} className="text-emerald-500 mr-2" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {activeProdi === 'indo' && (
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-bold text-emerald-900 mb-4">Pendidikan Bahasa Indonesia</h3>
                  <p className="text-gray-600 mb-6 text-lg">Menghasilkan pendidik bahasa, peneliti, dan praktisi sastra yang unggul dan berkarakter.</p>
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-800">Prospek Karir:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {['Guru & Dosen', 'Editor / Penyunting', 'Jurnalis', 'Penulis Konten', 'MC / Protokoler'].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-600"><CheckCircle size={16} className="text-emerald-500 mr-2" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {activeProdi === 'inggris' && (
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-bold text-emerald-900 mb-4">Pendidikan Bahasa Inggris</h3>
                  <p className="text-gray-600 mb-6 text-lg">Membentuk tenaga pendidik yang fasih berbahasa internasional dan siap bersaing di era global.</p>
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-800">Prospek Karir:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {['Guru Internasional', 'Translator', 'Staff Kedutaan', 'Tour Guide', 'Perusahaan Multinasional'].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-600"><CheckCircle size={16} className="text-emerald-500 mr-2" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LIFE AT CAMPUS & UKM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Kehidupan Mahasiswa" 
            subtitle="Temukan versi terbaik dirimu melalui berbagai kegiatan positif." 
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ukmData.map((ukm) => (
              <div 
                key={ukm.id} 
                className="group relative h-48 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedUKM(ukm)}
              >
                <img src={ukm.img} alt={ukm.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-emerald-900/60 transition-colors flex items-end p-4">
                  <h4 className="text-white font-bold text-sm md:text-base translate-y-2 group-hover:translate-y-0 transition-transform">{ukm.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UKM Modal */}
      {selectedUKM && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedUKM(null)}>
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <img src={selectedUKM.img} alt={selectedUKM.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedUKM.name}</h3>
              <p className="text-gray-600 mb-6">{selectedUKM.desc}</p>
              <button 
                onClick={() => setSelectedUKM(null)}
                className="w-full bg-emerald-600 text-white py-2 rounded-lg font-bold hover:bg-emerald-700 transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

     {/* ACHIEVEMENTS */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Trophy size={400} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tempat Lahirnya Generasi Perubahan</h2>
            <p className="text-emerald-200">Prestasi mahasiswa kami di kancah Regional maupun Nasional.</p>
          </div>

          {/* Grid diubah ke md:grid-cols-2 dan lg:grid-cols-4 agar muat 4 kartu */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { 
                num: "Juara 1 Kompetisi Poster Nasional", 
                title: "Juni Adi Saputra", 
                name: "Prodi Pendidikan Bahasa Inggris",
                icon: Trophy,
                img: "https://files.catbox.moe/jrlbw2.jpg" 
              },
              { 
                num: "Duta Literasi Indonesia", 
                title: "Novaldiansyah", 
                name: "Prodi Pendidikan Bahasa dan Sastra Indonesia",
                icon: BookOpen,
                img: "https://files.catbox.moe/n5to87.jpg"
              },
              { 
                num: "Juara 2 Presentasi Oral Tingkat Nasional", 
                title: "Widya Hariyanti", 
                name: "Prodi Pendidikan Bahasa Inggris",
                icon: Users,
                img: "https://files.catbox.moe/4io7lr.jpg"
              },
              { 
                num: "Satu-satunya Putri Perwakilan Sum-Sel Dalam Pertukaran Pemuda Antar Provinsi", 
                title: "Intan Della Classica", 
                name: "Prodi Pendidikan Bahasa Inggris",
                icon: Award, // Pastikan Award sudah di-import di bagian atas
                img: "https://files.catbox.moe/3i3qfr.jpg"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                {/* Foto Mahasiswa */}
                <div className="relative mb-6 mx-auto w-24 h-24">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-full border-4 border-emerald-500/50 group-hover:border-yellow-400 transition-colors"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-full text-emerald-900 shadow-lg">
                    <item.icon size={16} />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-1">{item.num}</h3>
                <p className="text-yellow-400 font-semibold text-sm mb-3 uppercase tracking-wider">{item.title}</p>
                <div className="h-px w-12 bg-emerald-500/50 mx-auto mb-3"></div>
                <p className="text-emerald-100 italic text-sm">"{item.name}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SCHOLARSHIP */}
      <section id="beasiswa" className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://files.catbox.moe/svwkcn.jpg" 
                alt="Beasiswa" 
                className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500"
              />
            </div>
            <div className="lg:w-1/2">
              <Badge className="bg-emerald-600 text-white mb-4">Kesempatan Emas</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Kampus dengan Beasiswa Terbanyak</h2>
              <p className="text-gray-700 mb-8 text-lg">Kami berkomitmen agar tidak ada anak bangsa yang putus kuliah karena biaya. Tersedia berbagai jalur beasiswa untukmu.</p>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  "KIP Kuliah (Bebas SPP + Uang Saku)",
                  "Bantuan Biaya Pendidikan (Bebas SPP)",
                  "Beasiswa Muhammadiyah (Potongan SPP 60%)",
                  "Beasiswa Tahfidz Quran (Potongan hingga 70%)",
                  "Beasiswa Kader Muhammadiyah (Gratis SPP 2 Semester)",
                  "Beasiswa Saudara & Suami/Istri (Saudara/Pasutri yang kuliah bareng di STKIPM Pagar Alam ada potongan SPP"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-yellow-200">
                    <CheckCircle className="text-emerald-600 w-6 h-6 mr-3 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALUMNI SUCCESS SECTION */}
      <section id="alumni" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Menggunakan komponen SectionTitle yang sudah kamu buat */}
          <SectionTitle 
            title="Jejaring Alumni Sukses" 
            subtitle="Lulusan kami telah berkarier di berbagai sektor, membuktikan kualitas pendidikan yang adaptif dan unggul." 
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 mt-12">
            {alumniData.map((alumnus, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative inline-block mb-6">
                  {/* Efek Bingkai Belakang */}
                  <div className="absolute inset-0 bg-emerald-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  
                  {/* Foto Alumni */}
                  <img 
                    src={alumnus.img} 
                    alt={alumnus.name} 
                    className="relative w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl shadow-md border-2 border-white"
                  />
                </div>
                
                {/* Nama & Pekerjaan */}
                <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-1">{alumnus.name}</h3>
                <p className="text-emerald-600 font-semibold text-sm md:text-base uppercase tracking-wider">
                  {alumnus.job}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALUR & BIAYA (Timeline) */}
      <section id="alur" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Langkah Mudah Menjadi Mahasiswa" subtitle="Ikuti alur pendaftaran berikut ini." />
          
          <div className="relative">
            {/* Connector Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "1", title: "Isi Formulir", desc: "Daftar online atau datang langsung ke kampus." },
                { step: "2", title: "Upload Berkas", desc: "Scan KTP/KK dan Ijazah terakhir." },
                { step: "3", title: "Pembayaran", desc: "Transfer biaya pendaftaran sesuai gelombang." },
                { step: "4", title: "Mulai Kuliah", desc: "Daftar ulang dan ikuti orientasi." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center border-b-4 border-emerald-600">
                  <div className="w-12 h-12 bg-emerald-600 text-white text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Biaya Box */}
          <div className="mt-16 bg-white max-w-3xl mx-auto rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-emerald-800 text-white text-center py-4">
              <h3 className="text-xl font-bold">Biaya Pendaftaran</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-6 text-center">
                <p className="text-gray-500 text-sm mb-1">Gelombang 1</p>
                <p className="text-2xl font-bold text-emerald-600">Rp 100.000</p>
                <Badge className="bg-red-100 text-red-600 text-xs mt-2">Segera Berakhir</Badge>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-500 text-sm mb-1">Gelombang 2</p>
                <p className="text-2xl font-bold text-gray-700">Rp 150.000</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-500 text-sm mb-1">Gelombang 3</p>
                <p className="text-2xl font-bold text-gray-700">Rp 200.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* FINAL CTA */}
<section id="daftar" className="py-20 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-center">
  <div className="container mx-auto px-4 max-w-4xl">
    <h2 className="text-3xl md:text-5xl font-bold mb-6">Masa Depanmu Dimulai Hari Ini</h2>
    <p className="text-xl opacity-90 mb-10">Jangan tunda lagi. Kuota beasiswa terbatas. Jadilah bagian dari keluarga besar STKIP Muhammadiyah Pagar Alam.</p>
    
    <div className="flex flex-col md:flex-row justify-center gap-4">
      {/* Tombol Daftar Online ke SISFO */}
      <a 
        href="https://sisfo.stkipm-pagaralam.ac.id/pendaftaran" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-yellow-400 text-emerald-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-yellow-300 transition transform hover:scale-105 flex items-center justify-center no-underline"
      >
        Daftar Online Sekarang <ArrowRight className="ml-2" />
      </a>

      {/* Tombol WhatsApp) */}
      <a 
        href="https://wa.me/6282171948535" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition flex items-center justify-center no-underline"
      >
        <Phone className="mr-2 w-5 h-5" />
        Konsultasi via WhatsApp
      </a>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
  src="https://files.catbox.moe/1cde7a.png" 
  alt="Logo STKIP Muhammadiyah Pagar Alam" 
  className="w-10 h-10 object-contain" 
/>
              <span className="text-xl font-bold text-white">STKIP Muhammadiyah Pagar Alam</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Kampus modern, berprestasi, dan peduli masa depan mahasiswa. Tempat lahirnya generasi perubahan.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/stkipmpgastory?igsh=MW0ycGozZmxpbGdmOA==" className="hover:text-emerald-500 transition"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/share/1AktMMCo3i/" className="hover:text-emerald-500 transition"><Facebook size={20} /></a>
              <a href="https://www.youtube.com/@STKIPMuhammadiyahPagarAlam" className="hover:text-emerald-500 transition"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Kontak Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-3 w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Jl. H. A. Rais Saleh No.39-22, Basemah Serasan, Kec. Pagar Alam Sel., Kota Pagar Alam, Sumatera Selatan 31529</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 w-5 h-5 text-emerald-500" />
                <span>+62 821-7194-8535</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 w-5 h-5 text-emerald-500 font-bold">@</div>
                <span>stkipmuhpagaralam@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('prodi')} className="hover:text-emerald-500">Program Studi</button></li>
              <li><button onClick={() => scrollToSection('beasiswa')} className="hover:text-emerald-500">Info Beasiswa</button></li>
              <li><button onClick={() => scrollToSection('alur')} className="hover:text-emerald-500">Alur Pendaftaran</button></li>
              <li><a href="https://drive.google.com/file/d/18FO7VSl97sJcGNaFBXUpSHATzA_Vydmk/view?usp=drive_link" className="hover:text-emerald-500">Download Brosur</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500">
          &copy; 2026 STKIP Muhammadiyah Pagar Alam. All rights reserved.
        </div>
      </footer>
    </div>
  );
}