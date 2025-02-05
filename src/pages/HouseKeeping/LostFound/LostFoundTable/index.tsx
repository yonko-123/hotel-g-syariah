import { dummy } from "./constants";

const HKLostFoundTable = () => {
  return (
    <div className="bg-blue-50 px-3 pt-5 pb-12 rounded-lg h-full">
      <div className="flex gap-2 font-medium">
        <input
          type="text"
          placeholder="Cari. . ."
          className="px-3 py-2 rounded-lg outline-none border-2 text-sm"
        />
        <button className="rounded-lg bg-blue-600 text-sm border-2 border-blue-50 text-white py-1 px-3">
          Cari
        </button>
        <button className="rounded-lg bg-white text-sm border-2 py-1 px-3">
          Edit Massal
        </button>
      </div>
      <table className="bg-white rounded-lg border-separate border border-gray-400 mx-auto my-4 w-full">
        <thead className="bg-gray-50 text-sm">
          <tr>
            <th className="px-3 py-2 text-left border-b border-gray-400">
              <input type="checkbox" />
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              Nama Barang
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              Deskripsi
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              Lokasi Penemuan
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              Waktu
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              Penemu
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              Status
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              Pemilik & No Telp
            </th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((data: any, index: number) => {
            return (
              <tr key={index} className="text-sm">
                <td className="px-3 py-2 text-left border-b border-gray-400 ">
                  <input type="checkbox" />
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.item}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.desc}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.loc}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.time}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.by}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.status}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.owner}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between px-4">
        <p className="text-sm">Showing 1 to 10 of 122 results</p>
        <div className="text-sm flex bg-white rounded-lg border border-gray-400">
          <button className="px-3 py-2 border-r border-gray-400">{`<`}</button>
          <button className="px-3 py-2 border-x border-gray-400 bg-gray-400 text-white">
            1
          </button>
          <button className="px-3 py-2">2</button>
          <button className="px-3 py-2 border-x border-gray-400">3</button>
          <button className="px-3 py-2">... </button>
          <button className="px-3 py-2 border-x border-gray-400">8</button>
          <button className="px-3 py-2">9</button>
          <button className="px-3 py-2 border-x border-gray-400">10</button>
          <button className="px-3 py-2">{`>`}</button>
        </div>
      </div>
    </div>
  );
};

export default HKLostFoundTable;
