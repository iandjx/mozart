import router from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../components/shared/Layout'

const StepFour = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    router.push('/createnft/stepfive')
    // alert(JSON.stringify(data))
  })

  return (
    <Layout className="bg-glow">
      <main className="mt-24">
        <div className="w-full bg-[#1D1E27] bg-opacity-50 p-16 flex flex-col ">
          <h1 className="mx-auto text-4xl font-bold">Last Step</h1>
          <section className="w-full mt-12">
            <h2>Step 4: Add pricing information</h2>
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-2 mt-7 gap-x-5 gap-y-11"
            >
              <div>
                <label htmlFor="itemName" className="text-white opacity-70">
                  Price to Play
                </label>
                <div className="flex items-stretch mt-3 ">
                  <div className="w-12  grid place-items-center  bg-[#1D1E27] bg-opacity-40 border-r border-white border-opacity-10">
                    <img src="/images/createNFT/ethereum.svg" alt="ethereum" />
                  </div>
                  <input
                    type="number"
                    className="bg-[#1D1E27] grow bg-opacity-40 border-0 "
                    placeholder="Enter your price"
                    {...register('priceToPlay', { required: true })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="itemName" className="text-white opacity-70">
                  Price to Own
                </label>
                <div className="flex items-stretch mt-3 ">
                  <div className="w-12  grid place-items-center  bg-[#1D1E27] bg-opacity-40 border-r border-white border-opacity-10">
                    <img src="/images/createNFT/ethereum.svg" alt="ethereum" />
                  </div>
                  <input
                    type="number"
                    className="bg-[#1D1E27] grow bg-opacity-40 border-0 "
                    placeholder="Enter your price"
                    {...register('priceToOwn', { required: true })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="itemName" className="text-white opacity-70">
                  Royalties
                </label>
                <div className="flex items-stretch mt-3">
                  <input
                    type="number"
                    placeholder="Enter the commission per re-sale"
                    className="bg-[#1D1E27] grow bg-opacity-40 border-0 "
                    {...register('royalty', { required: true })}
                  />
                  <div className="w-12  grid place-items-center  bg-[#1D1E27] bg-opacity-40 border-r border-white border-opacity-10">
                    %
                  </div>
                </div>
              </div>

              <div className="flex items-end gap-x-2">
                {[5, 10, 20, 30].map((opt, index) => {
                  return (
                    <button
                      className="w-[74px] h-[37px] bg-white bg-opacity-5 rounded-sm"
                      key={index}
                      onClick={() =>
                        setValue('royalty', opt, {
                          shouldValidate: true,
                          shouldDirty: true,
                        })
                      }
                    >
                      {opt} %
                    </button>
                  )
                })}
              </div>

              <input
                className="col-span-2 mx-auto mt-14 cursor-pointer font-semibold text-2xl h-[52px] w-[183px] rounded-xl bg-gradient-to-r from-[#5773D7] via-[#9757D7] to-[#D75775]"
                type="submit"
                value="Continue"
              />
            </form>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default StepFour
