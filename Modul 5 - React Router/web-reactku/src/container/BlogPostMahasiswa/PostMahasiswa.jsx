import React from 'react';

const PostMahasiswa = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-Mahasiswa">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-icons.com%2Ficons2%2F1465%2FPNG%2F512%2F130manstudent2_100617.png&f=1&nofb=1" alt="Gambar Tumbnail Mahasiswa"/>
            </div>
            <div className="konten-mahasiswa">
                <div className="nim-mahasiswa">{props.nim}</div>
                    <p className="nama-mahasiswa">{props.nama}</p>
                    <p className="alamat-mahasiswa">{props.alamat}</p>
                    <p className="hp-mahasiswa">{props.hp}</p>
                    <p className="angkatan-mahasiswa">{props.angkatan}</p>
                    <p className="status-mahasiswa">{props.status}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}

export default PostMahasiswa;