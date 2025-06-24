"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, Truck, Warehouse, CheckCircle, Edit } from "lucide-react";

type TrackingFormInputs = {
  trackingNumber: string;
};

type TrackingStatus = {
  id: number;
  status: string;
  goods_id: number;
  createdAt: string;
  updated_at: string;
};

type HistoryItem = {
  id: number;
  message: string;
  shipment_id: number;
  created_at: string;
  updated_at: string;
};

type Service = {
  id: number;
  barcode: string;
  status: string;
  price: string;
  weight: string;
  quantity: number;
  sum: string;
  bag_number: string;
  shipment_id: number;
  shipment: {
    id: number;
    truck_number: string;
    status: string;
    driver: string;
    history: HistoryItem[];
  };
};

type TrackingResult = {
  id: number;
  trackCode: string;
  status: string;
  invoice_number: string;
  created_at: string;
  updated_at: string;
  tracking_status: TrackingStatus[];
  services: Service[];
  recipient_id: number;
  sender_id: number;
  employee: {
    under_branch: {
      address: string;
      branch: {
        name: string;
      };
    };
  };
  destination: {
    name: string;
  };
  recipient: {
    name: string;
  };
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "В Складе":
    case "Создан":
      return Edit;
    case "В пути":
      return Truck;
    case "Готов к выдаче":
      return Warehouse;
    case "Выдали":
      return CheckCircle;
    default:
      return Package;
  }
};

const getStatusColor = (status: string, isActive: boolean) => {
  if (!isActive) return "bg-gray-400";

  switch (status) {
    case "В Складе":
    case "Создан":
      return "bg-yellow-500";
    case "В пути":
      return "bg-orange-500";
    case "Готов к выдаче":
      return "bg-teal-500";
    case "Выдали":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const TrackingSearch = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [showReadyDetails, setShowReadyDetails] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TrackingFormInputs>();

  const onSubmit = async (data: TrackingFormInputs) => {
    setIsSearching(true);
    setError(null);
    setTrackingResult(null);

    try {
      const response = await fetch(
        `http://192.168.1.192:5002/api/goods-processing/find-good/${encodeURIComponent(
          data.trackingNumber
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Посылка с таким номером не найдена");
        }
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const result = await response.json();
      setTrackingResult(result);
    } catch (error) {
      console.error("Error tracking package:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Ошибка при отслеживании посылки"
      );
    } finally {
      setIsSearching(false);
    }
  };

  const renderTrackingTimeline = () => {
    if (!trackingResult || !trackingResult.tracking_status) return null;

    const statuses = trackingResult.tracking_status.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    const currentStatusIndex = statuses.length - 1;

    // Получаем случайный сервис для истории
    const randomService =
      trackingResult.services && trackingResult.services.length > 0
        ? trackingResult.services[
            Math.floor(Math.random() * trackingResult.services.length)
          ]
        : null;

    return (
      <div className="bg-white rounded-lg border p-6 mt-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              № {trackingResult.invoice_number}
            </h3>
            <p className="text-sm text-gray-600">
              {trackingResult?.employee?.under_branch?.address}{" "}
              {trackingResult?.destination?.name} — Алматы
            </p>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-medium">{trackingResult.status}</span>
          </div>
        </div>

        <div className="space-y-8">
          {statuses.map((status, index) => {
            const isActive = index <= currentStatusIndex;
            const isLast = index === statuses.length - 1;
            const StatusIcon = getStatusIcon(status.status);

            return (
              <div key={status.id} className="relative">
                {/* Вертикальная линия */}
                {!isLast && (
                  <div
                    className={`absolute left-5 top-8 w-0.5 h-16 ${
                      isActive ? getStatusColor(status.status, isActive).replace('bg-', 'bg-') : "bg-gray-200"
                    }`}
                  />
                )}

                <div className="flex items-start gap-4">
                  {/* Иконка статуса */}
                  <div
                    className={`relative flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center ${getStatusColor(status.status, isActive)}`}
                  >
                    <StatusIcon className={`h-5 w-5 text-white`} />
                  </div>

                  {/* Контент статуса */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4
                          className={`font-medium ${
                            isActive ? "text-gray-900" : "text-gray-400"
                          }`}
                        >
                          {status.status}
                        </h4>
                        {status.status === "В пути" && isActive && (
                          <p className="text-sm text-[var(--ross)] mt-1 cursor-pointer hover:underline">
                            Подробнее ↓
                          </p>
                        )}
                        {status.status === "Готов к выдаче" && isActive && (
                          <p 
                            className="text-sm text-[var(--ross)] mt-1 cursor-pointer hover:underline"
                            onClick={() => setShowReadyDetails(!showReadyDetails)}
                          >
                            Подробнее {showReadyDetails ? '↑' : '↓'}
                          </p>
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          isActive ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {formatDate(status.createdAt)}
                      </span>
                    </div>

                    {/* Дополнительная информация для статуса "В пути" */}
                    {status.status === "В пути" &&
                      isActive &&
                      randomService &&
                      randomService.shipment && (
                        <div className={`mt-4 space-y-3 border-l-4 ${getStatusColor(status.status, isActive).replace('bg-', 'border-')} pl-5`}>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Москва
                            </p>
                            <p className="text-sm text-gray-600">
                              Принят на доставку
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatDate(status.createdAt)}
                            </p>
                          </div>

                          {randomService.shipment.history.map(
                            (historyItem, historyIndex) => (
                              <div key={historyItem.id}>
                                <p className="text-sm text-gray-600">
                                  {historyItem.message}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {formatDate(historyItem.created_at)}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      )}

                    {/* Дополнительная информация для статуса "Готов к выдаче" */}
                    {status.status === "Готов к выдаче" && isActive && (
                      <div 
                        className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                          showReadyDetails 
                            ? 'max-h-96 opacity-100' 
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className={`space-y-3 border-l-4 ${getStatusColor(status.status, isActive).replace('bg-', 'border-')} pl-4`}>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {trackingResult?.destination?.name || 'Алматы'}
                            </p>
                            <p className="text-sm text-gray-600">
                              Поступил. Заберите заказ
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatDate(status.createdAt)}
                            </p>
                          </div>
                          
                          {trackingResult?.employee?.under_branch?.address && (
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Адрес пункта выдачи
                              </p>
                              <p className="text-sm text-gray-600">
                                {trackingResult.employee.under_branch.address}
                              </p>
                            </div>
                          )}
                          
                          {trackingResult?.employee?.under_branch?.branch?.name && (
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Филиал
                              </p>
                              <p className="text-sm text-gray-600">
                                {trackingResult.employee.under_branch.branch.name}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Информация о получателе */}
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-900">Получатель</p>
              <p className="text-sm text-gray-600">
                {trackingResult?.recipient?.name}
              </p>
              {/* <p className="text-sm text-gray-600">Адрес пункта выдачи СДЭК</p>
              <p className="text-sm text-gray-600">
                пр-т. Райымбека батыра, 486Б
              </p>
              <p className="text-sm text-gray-600">Срок хранения</p>
              <p className="text-sm text-gray-600">20.06.2025</p> */}
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                {formatDate(trackingResult.updated_at)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 sm:space-y-4"
      >
        <div className="space-y-2">
          <label
            htmlFor="trackingNumber"
            className="text-sm font-medium text-gray-700"
          >
            Номер отправления
          </label>
          <div className="relative">
            <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              {...register("trackingNumber", {
                required: "Введите номер отправления",
                minLength: {
                  value: 5,
                  message: "Номер должен содержать минимум 5 символов",
                },
              })}
              type="text"
              placeholder="Введите номер отправления"
              className="pl-10 h-10 sm:h-11 text-sm sm:text-base"
              disabled={isSearching}
            />
          </div>
          {errors.trackingNumber && (
            <p className="text-xs sm:text-sm text-red-600">
              {errors.trackingNumber.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSearching}
          className="w-full h-11 sm:h-12 bg-[var(--ross)] hover:bg-[var(--ross)] text-white font-semibold text-[14px] lg:text-[16px]"
        >
          {isSearching ? "Поиск..." : "ОТСЛЕДИТЬ"}
        </Button>
      </form>

      {error && (
        <div className="p-3 sm:p-4 border border-red-200 rounded-lg bg-red-50">
          <p className="text-red-600 text-xs sm:text-sm">{error}</p>
        </div>
      )}

      {trackingResult && renderTrackingTimeline()}
    </div>
  );
};
