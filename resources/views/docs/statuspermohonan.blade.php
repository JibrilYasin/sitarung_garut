<html>
<body>
  <table style="width:775px">
    <tr>
      <td valign="top" style="width:387px">
        <table>
          <tr>
            <td valign="top" style="width:100px;line-height:30px">Nomor</td>
            <td valign="top" style="width:10px;line-height:30px">:</td>
            <td valign="top" style="width:270px;line-height:30px">{{ $permohonan['invoice'] }} </td>
          </tr>
          <tr>
            <td valign="top" style="width:100px;line-height:30px">Sifat</td>
            <td valign="top" style="width:10px;line-height:30px">:</td>
            <td valign="top" style="width:270px;line-height:30px">Biasa</td>
          </tr>
          <tr>
            <td valign="top" style="width:100px;line-height:30px">Lampiran</td>
            <td valign="top" style="width:10px;line-height:30px">:</td>
            <td valign="top" style="width:270px;line-height:30px">1 (Satu) Lembar</td>
          </tr>
          <tr>
            <td valign="top" style="width:100px;line-height:30px">Hal</td>
            <td valign="top" style="width:10px;line-height:30px">:</td>
            <td valign="top" style="width:270px;line-height:30px">Keterangan Rencana Kota (KRK) Pembangunan <b>{{ $permohonan['peruntukan'] }}</b></td>
          </tr>
        </table>
      </td>
      <td valign="top" style="width:387px;line-height:30px">
        <table>
          <tr>
            <td style="line-height:30px">Garut, {{ \App\Helpers\Date::shortDate(date('Y-m-d H:i:s')) }}</td>
          </tr>
          <tr>
            <td style="line-height:30px">Kepada</td>
          </tr>
          <tr>
            <td style="line-height:30px">Yth. {{ $permohonan['name'] }}</td>
          </tr>
          <tr>
            <td style="line-height:30px">di Tempat</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <p>Menjawab surat dari Saudara Nomor: {{ $permohonan['invoice'] }} tanggal {{ \App\Helpers\Date::shortDate($permohonan['created_at']) }} perihal permohonan Keterangan Rencana Kota (KRK) sehubungan dengan pembangunan “{{ $permohonan['peruntukan'] }}” yang berlokasi di {{ $permohonan['alamat_lahan'] }} di lahan seluas + {{ $permohonan['luas_lahan_rencana'] }} m2, dengan ini disampaikan beberapa hal sebagai berikut :</p> 
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <ol>
          <li>
            <p>Berdasarkan Perda Kabupaten Garut Nomor 6 Tahun 2019 tentang Perubahan Atas Perda Kabupaten Garut Nomor 29 Tahun 2011 tentang Rencana Tata Ruang Wilayah Kabupaten Garut Tahun 2011-2031, secara Pola Ruang lokasi yang dimohon termasuk dalam:</p>
            <ol type="a">
              @foreach($polaruang as $value)
              <li>
                <b><p>{{ $value['keterangan'] }}</p></b>
                <ul>
                  {!! $value['kupz_description'] !!}
                </ul>
              </li>
              @endforeach
            </ol>
          </li>
          <li>
            <p>Bangunan harus memenuhi beberapa ketentuan diantaranya:</p>
            <ol type="a">
              <li>
                <p>Ketinggian Bangunan maksimal 12 meter.</p>
              </li>
              <li>
                <p>Jumlah lantai/lapis bangunan maksimal 3 lapis.</p>
              </li>
              <li>
                <p>Berdasarkan Peraturan Bupati Garut Nomor 33 Tahun 2016 tentang Tata Cara Pengesahan Rencana Tapak, Koefisien Dasar Bangunan (KDB) untuk Non-Perumahan adalah maksimal 70%.</p>
              </li>
              <li>
                <p>Berdasarkan Peraturan Daerah Kabupaten Garut Nomor 1 Tahun 2015 tentang Garis Sempadan Jalan Pasal 6 ayat (1) huruf d, Sempadan Jalan pada jalan Lokal Sekunder, tidak kurang dari 2 (dua) meter diukur dari tepi badan jalan.</p>
              </li>
            </ol>
          </li>
          <li>
            <p>Keterangan Rencana Kota (KRK) ini bukan merupakan izin dan selanjutnya harus menempuh proses perizinan, apabila hendak dibangun sesuai dengan ketentuan.</p>
          </li>
        </ol>
      </td>
    </tr>
  </table>
  <table style="width:775px">
    <tr>
      <td colspan="2"><p></p></td>
    </tr>
  </table>
  <table style="width:775px">
    <tr>
      <td valign="center" style="background-color: DDDDDD;padding:10px;font-size:12px;text-align:center;width:258px;line-height:30px">
        <b>Koordinat</b>
      </td>
      <td valign="center" style="background-color: DDDDDD;padding:10px;font-size:12px;text-align:center;width:258px;line-height:30px">
        <b>X</b>
      </td>
      <td valign="center" style="background-color: DDDDDD;padding:10px;font-size:12px;text-align:center;width:258px;line-height:30px">
        <b>Y</b>
      </td>
    </tr>
    @php
      $no=1;
    @endphp
    @foreach(json_decode($permohonan['coordinates']) as $value)
    @php
      $lat = explode(",",$value)[1];
      $lng = explode(",",$value)[0];
    @endphp
    <tr>
      <td valign="center" style="background-color: F5F5F5;padding:10px;font-size:12px;text-align:center;width:258px;line-height:30px">
        K{{ $no++ }}
      </td>
      <td valign="center" style="background-color: F5F5F5;padding:10px;font-size:12px;text-align:center;width:258px;line-height:30px">
        {{ explode(" : ",$lat)[1] }}
      </td>
      <td valign="center" style="background-color: F5F5F5;padding:10px;font-size:12px;text-align:center;width:258px;line-height:30px">
        {{ explode(" : ",$lng)[1] }}
      </td>
    </tr>
    @endforeach
  </table>
  <table style="width:775px">
    <tr>
      <td colspan="2"><p></p></td>
    </tr>
  </table>
  <table style="width:775px">
    <tr>
      <td>
        <p>Demikian disampaikan, untuk menjadi bahan pertimbangan lebih lanjut.</p> 
      </td>
    </tr>
  </table>
  <table style="width:775px">
    <tr>
      <td colspan="2"><p></p></td>
    </tr>
  </table>
  <table style="width:775px">
    <tr>
      <td style="width:387px"></td>
      <td style="width:387px;text-align:center">
        <p>Plh. K E P A L A,</p>
        <p>S E K R E T A R I S,</p>
        <p style="line-height:30px;color:FFFFFF">-</p>
        <p style="line-height:30px;color:FFFFFF">-</p>
        <p style="line-height:30px;color:FFFFFF">-</p>
        <p style="line-height:30px;color:FFFFFF">-</p>
        <p style="line-height:30px;color:FFFFFF">-</p>
        <p style="text-decoration:underline"><b>ASEP OO KOSASIH, ST, M.I.L</b></p>
        <p>NIP. 19720630 200003 1 006</p>
      </td>
    </tr>
  </table>
</body>
</html>
